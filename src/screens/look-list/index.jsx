import { FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { LookItem } from "../../components";
import { loadLooks } from "../../store/look.slice";
import { styles } from "./styles";
import { useEffect } from "react";

const LookList = ({ navigation }) => {
  const dispatch = useDispatch();
  const looks = useSelector((state) => state.look.looks);

  useEffect(() => {
    dispatch(loadLooks());
  }, [dispatch]);

  const renderItem = ({ item }) => (
    <LookItem
      {...item}
      onSelect={() => navigation.navigate("LookDetail", { lookId: item.id })}
    />
  );

  const ListEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No hay lugares</Text>
    </View>
  );
  return (
    <FlatList
      style={styles.container}
      data={looks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};

export default LookList;
