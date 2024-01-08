import { StyleSheet } from 'react-native';

const Blocks = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#373737',
  },
  title: {
    color: '#D9D9D9',
    textAlign: 'center',
    marginBottom: 5
  },
  workContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 15,
    borderWidth: 1,
    borderColor: 'rgb(225, 232, 238)',
    padding: 15
  }
});


export default Blocks;