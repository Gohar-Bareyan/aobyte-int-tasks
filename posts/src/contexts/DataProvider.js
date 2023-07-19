import React from 'react';
import DataContext from './DataContext';
import { fetchPostsDataFromBackend } from '../api';

class DataProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
    }
  };

  componentDidMount() {
    this.fetchPostsData();
  };

  fetchPostsData = async () => {
    try {
      const response = await fetchPostsDataFromBackend();
      this.setState({ posts: response });
    } catch (error) {
      console.error("Error fetching posts' data:", error);
    }
  };

  render() {
    const { posts } = this.state;

    return (
      <DataContext.Provider value={{ posts, fetchPostsData: this.fetchPostsData }}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataProvider;
