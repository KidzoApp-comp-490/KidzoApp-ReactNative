import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import OnboardingSlide from './OnboardingSlide';

const slides = [
  {
    id: 1,
    image: require('../../assets/Info/Group 58.png'),
    title: 'Onboarding Screen 1',
    description: 'This is the first onboarding screen.',
  },
  {
    id: 2,
    image: require('../../assets/Info/Group 58.png'),
    title: 'Onboarding Screen 2',
    description: 'This is the second onboarding screen.',
  },
  {
    id: 3,
    image: require('../../assets/MedicalH/MedicalH.png'),
    title: 'Onboarding Screen 3',
    description: 'This is the third and final onboarding screen.',
  },
];

const OnboardingFlow = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (activeIndex < slides.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      navigation.navigate('SignIn');
    }
  };

  const handleSkip = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <OnboardingSlide
        image={slides[activeIndex].image}
        title={slides[activeIndex].title}
        description={slides[activeIndex].description}
      />
      <View style={styles.buttonContainer}>
        <Button
          title={activeIndex === slides.length - 1 ? 'Finish' : 'Next'}
          onPress={handleNext}
          color ="#FFA8C5"
        />
        <Button
          title="Skip"
          onPress={handleSkip}
          color ="#FFA8C5"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
    paddingBottom:20,
  },
});

export default OnboardingFlow;

