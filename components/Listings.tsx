import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { Listing } from "@/interfaces/listing";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeInRight } from "react-native-reanimated";

interface Props {
  listings: any[];
  category: string;
}

const Listings = ({ listings: items, category }: Props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("RELOAD");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);

  const renderRow: ListRenderItem<Listing> = ({ item }) => {
    return (
      <Link href={`/listing/${item.id}`} asChild>
        <TouchableOpacity>
          <Animated.View entering={FadeInRight} style={styles.listing}>
            <Image
              source={{
                uri: item.medium_url,
              }}
              style={styles.image}
            />
            <TouchableOpacity
              style={{
                position: "absolute",
                top: 30,
                right: 30,
              }}
            >
              <Ionicons size={24} name="heart-outline" color={"#000"} />
            </TouchableOpacity>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontFamily: "mon-sb" }}> {item.name} </Text>
              <View style={{ flexDirection: "row" }}>
                <Ionicons name="star" size={16} />
                <Text style={{ fontFamily: "mon-sb" }}>
                  {item.review_scores_rating / 20}{" "}
                </Text>
              </View>
            </View>
            <View>
              <Text style={{ fontFamily: "mon", color: Colors.grey }}>
                {" "}
                {item.room_type}{" "}
              </Text>
            </View>
            <View style={{ flexDirection: "row", gap: 4 }}>
              <Text style={{ fontFamily: "mon-sb" }}>€ {item.price}</Text>
              <Text style={{ fontFamily: "mon" }}>night</Text>
            </View>
          </Animated.View>
        </TouchableOpacity>
      </Link>
    );
  };

  return (
    <View style={defaultStyles.container}>
      <FlatList renderItem={renderRow} data={loading ? [] : items} />
    </View>
  );
};

const styles = StyleSheet.create({
  listing: {
    padding: 20,
    gap: 10,
    marginVertical: 16,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
});

export default Listings;
