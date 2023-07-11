import React from "react";

import { ReactComponent as AddIcon } from "../../images/add_icon.svg";
import { ReactComponent as SortIcon } from "../../images/sort_icon.svg";

import postsData from "../../posts.json";
import ColumnLayout from "../../components/ColumnLayout";
import { RATE_COLORS, RATE_NUMBERS } from "../../constants";

class ColumnLayoutContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leftColumnPosts: [],
            updatedPostsData: [],
            rightColumnPosts: [],
            postsSortedByRating: []
        };
    }

    calculateAverageRate = (comments) => {
        if (!comments || comments.length === 0) {
            return 0;
        }

        const totalRate = comments.reduce((sum, comment) => sum + comment.rate, 0);
        return totalRate / comments.length;
    };

    updateAverageRate() {
        return postsData.map(post => {
            const averageRate = this.calculateAverageRate(post.comments);
            return {
                ...post,
                averageRate: +averageRate.toFixed(1)
            };
        });
    };

    handleAddSinglePost = (column) => {
        const { postsSortedByRating } = this.state;

        if (postsSortedByRating.length === 0) {
            return;
        }

        this.setState(prevState => ({
            [column]: [...prevState[column], postsSortedByRating.shift()],
            postsSortedByRating: postsSortedByRating,
        }));
    };

    handleAddSinglePostOnLeft = () => {
        this.handleAddSinglePost("leftColumnPosts");
    };

    handleAddSinglePostOnRight = () => {
        this.handleAddSinglePost("rightColumnPosts");
    };

    handleDeleteSinglePost = (column, postId) => {
        this.setState(prevState => {
            const { postsSortedByRating } = prevState;
            const columnPosts = [...prevState[column]];

            const deletedPost = columnPosts.find(post => post.id === postId);

            if (deletedPost) {
                const updatedColumnPosts = columnPosts.filter(post => post.id !== postId);
                const updatedPostsSortedByRating = [deletedPost, ...postsSortedByRating];

                return {
                    postsSortedByRating: updatedPostsSortedByRating,
                    [column]: updatedColumnPosts,
                };
            }

            return prevState;
        });
    };

    handleDeleteSinglePostOnLeft = (postId) => {
        this.handleDeleteSinglePost("leftColumnPosts", postId);
    };

    handleDeleteSinglePostOnRight = (postId) => {
        this.handleDeleteSinglePost("rightColumnPosts", postId);
    };

    handleSortPosts = (column) => {
        const { isDescendingOrder } = this.state;
        const posts = [...this.state[column]];

        posts.sort((a, b) => {
            if (isDescendingOrder) {
                return a.averageRate - b.averageRate;
            }
            return b.averageRate - a.averageRate;
        });

        this.setState(prevState => ({
            [column]: posts,
            isDescendingOrder: !prevState.isDescendingOrder,
        }));
    };

    handleSortPostsOnLeft = () => {
        this.handleSortPosts("leftColumnPosts");
    };

    handleSortPostsOnRight = () => {
        this.handleSortPosts("rightColumnPosts");
    };

    getIconColor = (averageRate) => {
        switch (true) {
            case averageRate > RATE_NUMBERS.FOUR:
                return RATE_COLORS.DARK_GREEN;
            case averageRate > RATE_NUMBERS.THREE:
                return RATE_COLORS.LIGHT_GREEN;
            case averageRate > RATE_NUMBERS.TWO:
                return RATE_COLORS.YELLOW;
            case averageRate > RATE_NUMBERS.ONE:
                return RATE_COLORS.ORANGE;
            default:
                return RATE_COLORS.RED;
        }
    };

    componentDidMount = () => {
        this.setState({
            updatedPostsData: this.updateAverageRate()
        }, () => {
            const postsSortedByRating = [...this.state.updatedPostsData].sort((a, b) => b.averageRate - a.averageRate);
            this.setState({ postsSortedByRating })
        })
    };

    render() {
        const { leftColumnPosts, rightColumnPosts } = this.state;

        const leftPartActions = [
            { icon: <AddIcon onClick={this.handleAddSinglePostOnLeft} />, name: "Add" },
            { icon: <SortIcon onClick={this.handleSortPostsOnLeft} />, name: "Sort" },
        ];

        const rightPartActions = [
            { icon: <AddIcon onClick={this.handleAddSinglePostOnRight} />, name: "Add" },
            { icon: <SortIcon onClick={this.handleSortPostsOnRight} />, name: "Sort" },
        ];

        return (
            <ColumnLayout
                getIconColor={this.getIconColor}
                leftColumnPosts={leftColumnPosts}
                leftPartActions={leftPartActions}
                rightPartActions={rightPartActions}
                rightColumnPosts={rightColumnPosts}
                handleDeleteSinglePostOnLeft={this.handleDeleteSinglePostOnLeft}
                handleDeleteSinglePostOnRight={this.handleDeleteSinglePostOnRight}
            />
        )
    }
};

export default ColumnLayoutContainer;