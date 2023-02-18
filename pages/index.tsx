// Components import
import MainNavigation from '../components/MainNavigation';
import MainFooter from '../components/MainFooter';
import { Layout } from 'antd';

// Ant Design import
const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};

function App() {
  return <>
    <Layout>
      <MainNavigation />
      {/* <HomeContainer /> */}
      <Layout.Content style={contentStyle}>
        Hello World
      </Layout.Content>
      <MainFooter />
    </Layout>
  </>;
}

export default App;
