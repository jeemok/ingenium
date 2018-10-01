import React, { Component } from 'react';
import styles from './_indexImageConfiguration.scss';
import classNames from 'classnames/bind';
import IndexImageConfigurationPin from './IndexImageConfigurationPin';
import DoubleCta from '../../components/common-elements/DoubleCta';
// import chevronLeft from '../../../static/images/icons/chevron-left.svg';
// import chevronRight from '../../../static/images/icons/chevron-right.svg';
// import bigImage01 from '../../../static/images/index/modulos-4x2conf.jpg';
// import bigImage02 from '../../../static/images/index/modulos-4x2conf-02.jpg';
// import bigImage03 from '../../../static/images/index/modulos-4x2conf-03.jpg';
// import bigImage04 from '../../../static/images/index/modulos-4x2conf-04.jpg';

let cx = classNames.bind(styles);

const setups = [
  {
    image: '',//bigImage02,
    name: 'Modern with a twist',
    description: 'You like the impressive features that Aeon material brings, but love the look and feel of wood? You can have both!',
    price: 1034.00,
    ctaTarget: '/configurator#W1tbeyJtb2R1bGVOYW1lIjoidGFibGV0LWRvY2stcm90YXJ5IiwibWF0ZXJpYWwiOiJBZW9uIiwiY29sb3IiOiJkYXJrIiwib3JpZW50YXRpb24iOiJ1bml2ZXJzYWwiLCJyb3RhdGlvbiI6MCwibGVnUG9zaXRpb25zIjp7InRvcExlZnQiOnRydWUsInRvcFJpZ2h0IjpmYWxzZSwiYm90dG9tUmlnaHQiOmZhbHNlLCJib3R0b21MZWZ0IjpmYWxzZSwibWlkZGxlIjpmYWxzZX0sImxlZ3NDb3VudCI6MX0seyJtb2R1bGVOYW1lIjoiY2FibGluZy1ob2xlIiwibWF0ZXJpYWwiOiJBZW9uIiwib3JpZW50YXRpb24iOiJ1bml2ZXJzYWwiLCJjb2xvciI6ImRhcmsiLCJyb3RhdGlvbiI6MCwibGVnUG9zaXRpb25zIjp7InRvcExlZnQiOmZhbHNlLCJ0b3BSaWdodCI6ZmFsc2UsImJvdHRvbVJpZ2h0IjpmYWxzZSwiYm90dG9tTGVmdCI6ZmFsc2UsIm1pZGRsZSI6ZmFsc2V9LCJsZWdzQ291bnQiOjB9LHsibW9kdWxlTmFtZSI6ImJhc2ljIiwibWF0ZXJpYWwiOiJIZXJpdGFnZSIsIm9yaWVudGF0aW9uIjoiaG9yaXpvbnRhbCIsImNvbG9yIjoib2FrIiwicm90YXRpb24iOjAsImxlZ1Bvc2l0aW9ucyI6eyJ0b3BMZWZ0IjpmYWxzZSwidG9wUmlnaHQiOmZhbHNlLCJib3R0b21SaWdodCI6ZmFsc2UsImJvdHRvbUxlZnQiOmZhbHNlLCJtaWRkbGUiOmZhbHNlfSwibGVnc0NvdW50IjowfSx7Im1vZHVsZU5hbWUiOiJ0YWJsZXQtZG9jayIsIm1hdGVyaWFsIjoiQWVvbiIsImNvbG9yIjoiZGFyayIsIm9yaWVudGF0aW9uIjoidW5pdmVyc2FsIiwicm90YXRpb24iOjAsImxlZ1Bvc2l0aW9ucyI6eyJ0b3BMZWZ0IjpmYWxzZSwidG9wUmlnaHQiOnRydWUsImJvdHRvbVJpZ2h0IjpmYWxzZSwiYm90dG9tTGVmdCI6ZmFsc2UsIm1pZGRsZSI6ZmFsc2V9LCJsZWdzQ291bnQiOjF9XSxbeyJtb2R1bGVOYW1lIjoiYmFzaWMiLCJtYXRlcmlhbCI6IkFlb24iLCJjb2xvciI6ImRhcmsiLCJvcmllbnRhdGlvbiI6InVuaXZlcnNhbCIsInJvdGF0aW9uIjowLCJsZWdQb3NpdGlvbnMiOnsidG9wTGVmdCI6ZmFsc2UsInRvcFJpZ2h0IjpmYWxzZSwiYm90dG9tUmlnaHQiOmZhbHNlLCJib3R0b21MZWZ0Ijp0cnVlLCJtaWRkbGUiOmZhbHNlfSwibGVnc0NvdW50IjoxfSx7Im1vZHVsZU5hbWUiOiJiYXNpYyIsIm1hdGVyaWFsIjoiQWVvbiIsIm9yaWVudGF0aW9uIjoidW5pdmVyc2FsIiwiY29sb3IiOiJkYXJrIiwicm90YXRpb24iOjAsImxlZ1Bvc2l0aW9ucyI6eyJ0b3BMZWZ0IjpmYWxzZSwidG9wUmlnaHQiOmZhbHNlLCJib3R0b21SaWdodCI6ZmFsc2UsImJvdHRvbUxlZnQiOmZhbHNlLCJtaWRkbGUiOmZhbHNlfSwibGVnc0NvdW50IjowfSx7Im1vZHVsZU5hbWUiOiJiYXNpYyIsIm1hdGVyaWFsIjoiQWVvbiIsIm9yaWVudGF0aW9uIjoidW5pdmVyc2FsIiwiY29sb3IiOiJkYXJrIiwicm90YXRpb24iOjAsImxlZ1Bvc2l0aW9ucyI6eyJ0b3BMZWZ0IjpmYWxzZSwidG9wUmlnaHQiOmZhbHNlLCJib3R0b21SaWdodCI6ZmFsc2UsImJvdHRvbUxlZnQiOmZhbHNlLCJtaWRkbGUiOmZhbHNlfSwibGVnc0NvdW50IjowfSx7Im1vZHVsZU5hbWUiOiJiYXNpYyIsIm1hdGVyaWFsIjoiSGVyaXRhZ2UiLCJjb2xvciI6Im9hayIsIm9yaWVudGF0aW9uIjoiaG9yaXpvbnRhbCIsInJvdGF0aW9uIjowLCJsZWdQb3NpdGlvbnMiOnsidG9wTGVmdCI6ZmFsc2UsInRvcFJpZ2h0IjpmYWxzZSwiYm90dG9tUmlnaHQiOnRydWUsImJvdHRvbUxlZnQiOmZhbHNlLCJtaWRkbGUiOmZhbHNlfSwibGVnc0NvdW50IjoxfV1dLCJ3b29kZW4tY29uZS03MTUiXQ%3D%3D',
    pins: [
      {
        locationX: '24%',
        locationY: '38%',
        moduleId: 'tablet-dock-rotary',
        moduleMaterial: 'Aeon',
        moduleColor: 'dark',
        moduleOrientation: 'universal',
      },
      {
        locationX: '68%',
        locationY: '40%',
        moduleId: 'tablet-dock',
        moduleMaterial: 'Aeon',
        moduleColor: 'dark',
        moduleOrientation: 'universal',
      },
      {
        locationX: '13%',
        locationY: '70%',
        legId: 'wooden-cone-715',
      }
    ]
  },
  {
    image: '',//bigImage03,
    name: 'Modern, dark and practical',
    description: 'Antibacterial, ultra-matte, resistant. Plus practical features. A perfect desk setup.',
    price: 928.00,
    ctaTarget: '/configurator#W1tbeyJtb2R1bGVOYW1lIjoiYmFzaWMiLCJtYXRlcmlhbCI6IkFlb24iLCJjb2xvciI6ImRhcmsiLCJvcmllbnRhdGlvbiI6InVuaXZlcnNhbCIsInJvdGF0aW9uIjowLCJsZWdQb3NpdGlvbnMiOnsidG9wTGVmdCI6dHJ1ZSwidG9wUmlnaHQiOmZhbHNlLCJib3R0b21SaWdodCI6ZmFsc2UsImJvdHRvbUxlZnQiOmZhbHNlLCJtaWRkbGUiOmZhbHNlfSwibGVnc0NvdW50IjoxfSx7Im1vZHVsZU5hbWUiOiJjYWJsaW5nLWhvbGUiLCJtYXRlcmlhbCI6IkFlb24iLCJvcmllbnRhdGlvbiI6InVuaXZlcnNhbCIsImNvbG9yIjoiZGFyayIsInJvdGF0aW9uIjowLCJsZWdQb3NpdGlvbnMiOnsidG9wTGVmdCI6ZmFsc2UsInRvcFJpZ2h0IjpmYWxzZSwiYm90dG9tUmlnaHQiOmZhbHNlLCJib3R0b21MZWZ0IjpmYWxzZSwibWlkZGxlIjpmYWxzZX0sImxlZ3NDb3VudCI6MH0seyJtb2R1bGVOYW1lIjoiYmFzaWMiLCJtYXRlcmlhbCI6IkFlb24iLCJvcmllbnRhdGlvbiI6InVuaXZlcnNhbCIsImNvbG9yIjoiZGFyayIsInJvdGF0aW9uIjowLCJsZWdQb3NpdGlvbnMiOnsidG9wTGVmdCI6ZmFsc2UsInRvcFJpZ2h0IjpmYWxzZSwiYm90dG9tUmlnaHQiOmZhbHNlLCJib3R0b21MZWZ0IjpmYWxzZSwibWlkZGxlIjpmYWxzZX0sImxlZ3NDb3VudCI6MH0seyJtb2R1bGVOYW1lIjoiYmFzaWMiLCJtYXRlcmlhbCI6IkFlb24iLCJjb2xvciI6ImRhcmsiLCJvcmllbnRhdGlvbiI6InVuaXZlcnNhbCIsInJvdGF0aW9uIjowLCJsZWdQb3NpdGlvbnMiOnsidG9wTGVmdCI6ZmFsc2UsInRvcFJpZ2h0Ijp0cnVlLCJib3R0b21SaWdodCI6ZmFsc2UsImJvdHRvbUxlZnQiOmZhbHNlLCJtaWRkbGUiOmZhbHNlfSwibGVnc0NvdW50IjoxfV0sW3sibW9kdWxlTmFtZSI6InBlbmNpbHMiLCJtYXRlcmlhbCI6IkFlb24iLCJjb2xvciI6ImRhcmsiLCJvcmllbnRhdGlvbiI6InVuaXZlcnNhbCIsInJvdGF0aW9uIjowLCJsZWdQb3NpdGlvbnMiOnsidG9wTGVmdCI6ZmFsc2UsInRvcFJpZ2h0IjpmYWxzZSwiYm90dG9tUmlnaHQiOmZhbHNlLCJib3R0b21MZWZ0Ijp0cnVlLCJtaWRkbGUiOmZhbHNlfSwibGVnc0NvdW50IjoxfSx7Im1vZHVsZU5hbWUiOiJiYXNpYyIsIm1hdGVyaWFsIjoiQWVvbiIsIm9yaWVudGF0aW9uIjoidW5pdmVyc2FsIiwiY29sb3IiOiJkYXJrIiwicm90YXRpb24iOjAsImxlZ1Bvc2l0aW9ucyI6eyJ0b3BMZWZ0IjpmYWxzZSwidG9wUmlnaHQiOmZhbHNlLCJib3R0b21SaWdodCI6ZmFsc2UsImJvdHRvbUxlZnQiOmZhbHNlLCJtaWRkbGUiOmZhbHNlfSwibGVnc0NvdW50IjowfSx7Im1vZHVsZU5hbWUiOiJiYXNpYyIsIm1hdGVyaWFsIjoiQWVvbiIsIm9yaWVudGF0aW9uIjoidW5pdmVyc2FsIiwiY29sb3IiOiJkYXJrIiwicm90YXRpb24iOjAsImxlZ1Bvc2l0aW9ucyI6eyJ0b3BMZWZ0IjpmYWxzZSwidG9wUmlnaHQiOmZhbHNlLCJib3R0b21SaWdodCI6ZmFsc2UsImJvdHRvbUxlZnQiOmZhbHNlLCJtaWRkbGUiOmZhbHNlfSwibGVnc0NvdW50IjowfSx7Im1vZHVsZU5hbWUiOiJiYXNpYyIsIm1hdGVyaWFsIjoiQWVvbiIsIm9yaWVudGF0aW9uIjoidW5pdmVyc2FsIiwiY29sb3IiOiJkYXJrIiwicm90YXRpb24iOjAsImxlZ1Bvc2l0aW9ucyI6eyJ0b3BMZWZ0IjpmYWxzZSwidG9wUmlnaHQiOmZhbHNlLCJib3R0b21SaWdodCI6dHJ1ZSwiYm90dG9tTGVmdCI6ZmFsc2UsIm1pZGRsZSI6ZmFsc2V9LCJsZWdzQ291bnQiOjB9XV0sIm1ldGFsLWhhaXJwaW4tNzE1Il0%3D',
    pins: [
      {
        locationX: '38%',
        locationY: '32%',
        moduleId: 'cabling-hole',
        moduleMaterial: 'Aeon',
        moduleColor: 'dark',
        moduleOrientation: 'universal',
      },
      {
        locationX: '72%',
        locationY: '28%',
        moduleId: 'tablet-dock',
        moduleMaterial: 'Aeon',
        moduleColor: 'dark',
        moduleOrientation: 'universal',
      },
      {
        locationX: '18%',
        locationY: '46%',
        moduleId: 'pencils',
        moduleMaterial: 'Aeon',
        moduleColor: 'dark',
        moduleOrientation: 'universal',
      },
      {
        locationX: '17%',
        locationY: '80%',
        legId: 'metal-hairpin-715',
      }
    ]
  },
  {
    image: '',//bigImage01,
    name: 'Wooden beauty',
    description: 'A standard-sized desk that showcases the beauty of proper wood, but with a dash of smart.',
    price: 1364.00,
    ctaTarget: '/configurator#W1tbeyJtb2R1bGVOYW1lIjoiY2FibGluZy1ob2xlIiwibWF0ZXJpYWwiOiJIZXJpdGFnZSIsImNvbG9yIjoib2FrIiwib3JpZW50YXRpb24iOiJob3Jpem9udGFsIiwicm90YXRpb24iOjAsImxlZ1Bvc2l0aW9ucyI6eyJ0b3BMZWZ0Ijp0cnVlLCJ0b3BSaWdodCI6ZmFsc2UsImJvdHRvbVJpZ2h0IjpmYWxzZSwiYm90dG9tTGVmdCI6ZmFsc2UsIm1pZGRsZSI6ZmFsc2V9LCJsZWdzQ291bnQiOjF9LHsibW9kdWxlTmFtZSI6ImJhc2ljIiwibWF0ZXJpYWwiOiJIZXJpdGFnZSIsIm9yaWVudGF0aW9uIjoiaG9yaXpvbnRhbCIsImNvbG9yIjoib2FrIiwicm90YXRpb24iOjAsImxlZ1Bvc2l0aW9ucyI6eyJ0b3BMZWZ0IjpmYWxzZSwidG9wUmlnaHQiOmZhbHNlLCJib3R0b21SaWdodCI6ZmFsc2UsImJvdHRvbUxlZnQiOmZhbHNlLCJtaWRkbGUiOmZhbHNlfSwibGVnc0NvdW50IjowfSx7Im1vZHVsZU5hbWUiOiJiYXNpYyIsIm1hdGVyaWFsIjoiSGVyaXRhZ2UiLCJvcmllbnRhdGlvbiI6Imhvcml6b250YWwiLCJjb2xvciI6Im9hayIsInJvdGF0aW9uIjowLCJsZWdQb3NpdGlvbnMiOnsidG9wTGVmdCI6ZmFsc2UsInRvcFJpZ2h0IjpmYWxzZSwiYm90dG9tUmlnaHQiOmZhbHNlLCJib3R0b21MZWZ0IjpmYWxzZSwibWlkZGxlIjpmYWxzZX0sImxlZ3NDb3VudCI6MH0seyJtb2R1bGVOYW1lIjoidHdpc3QiLCJtYXRlcmlhbCI6Ikhlcml0YWdlIiwiY29sb3IiOiJvYWsiLCJvcmllbnRhdGlvbiI6Imhvcml6b250YWwiLCJyb3RhdGlvbiI6MCwibGVnUG9zaXRpb25zIjp7InRvcExlZnQiOmZhbHNlLCJ0b3BSaWdodCI6dHJ1ZSwiYm90dG9tUmlnaHQiOmZhbHNlLCJib3R0b21MZWZ0IjpmYWxzZSwibWlkZGxlIjpmYWxzZX0sImxlZ3NDb3VudCI6MX1dLFt7Im1vZHVsZU5hbWUiOiJiYXNpYyIsIm1hdGVyaWFsIjoiSGVyaXRhZ2UiLCJjb2xvciI6Im9hayIsIm9yaWVudGF0aW9uIjoiaG9yaXpvbnRhbCIsInJvdGF0aW9uIjowLCJsZWdQb3NpdGlvbnMiOnsidG9wTGVmdCI6ZmFsc2UsInRvcFJpZ2h0IjpmYWxzZSwiYm90dG9tUmlnaHQiOmZhbHNlLCJib3R0b21MZWZ0Ijp0cnVlLCJtaWRkbGUiOmZhbHNlfSwibGVnc0NvdW50IjoxfSx7Im1vZHVsZU5hbWUiOiJiYXNpYyIsIm1hdGVyaWFsIjoiSGVyaXRhZ2UiLCJvcmllbnRhdGlvbiI6Imhvcml6b250YWwiLCJjb2xvciI6Im9hayIsInJvdGF0aW9uIjowLCJsZWdQb3NpdGlvbnMiOnsidG9wTGVmdCI6ZmFsc2UsInRvcFJpZ2h0IjpmYWxzZSwiYm90dG9tUmlnaHQiOmZhbHNlLCJib3R0b21MZWZ0IjpmYWxzZSwibWlkZGxlIjpmYWxzZX0sImxlZ3NDb3VudCI6MH0seyJtb2R1bGVOYW1lIjoiYmFzaWMiLCJtYXRlcmlhbCI6Ikhlcml0YWdlIiwib3JpZW50YXRpb24iOiJob3Jpem9udGFsIiwiY29sb3IiOiJvYWsiLCJyb3RhdGlvbiI6MCwibGVnUG9zaXRpb25zIjp7InRvcExlZnQiOmZhbHNlLCJ0b3BSaWdodCI6ZmFsc2UsImJvdHRvbVJpZ2h0IjpmYWxzZSwiYm90dG9tTGVmdCI6ZmFsc2UsIm1pZGRsZSI6ZmFsc2V9LCJsZWdzQ291bnQiOjB9LHsibW9kdWxlTmFtZSI6ImJhc2ljIiwibWF0ZXJpYWwiOiJIZXJpdGFnZSIsImNvbG9yIjoib2FrIiwib3JpZW50YXRpb24iOiJob3Jpem9udGFsIiwicm90YXRpb24iOjAsImxlZ1Bvc2l0aW9ucyI6eyJ0b3BMZWZ0IjpmYWxzZSwidG9wUmlnaHQiOmZhbHNlLCJib3R0b21SaWdodCI6dHJ1ZSwiYm90dG9tTGVmdCI6ZmFsc2UsIm1pZGRsZSI6ZmFsc2V9LCJsZWdzQ291bnQiOjF9XV0sIndvb2Rlbi1jb25lLTcxNSJd',
    pins: [
      {
        locationX: '18%',
        locationY: '52%',
        moduleId: 'twist',
        moduleMaterial: 'Heritage',
        moduleColor: 'oak',
        moduleOrientation: 'horizontal',
      },
      {
        locationX: '65%',
        locationY: '60%',
        moduleId: 'cabling-hole',
        moduleMaterial: 'Heritage',
        moduleColor: 'oak',
        moduleOrientation: 'horizontal',
      },
      {
        locationX: '70%',
        locationY: '70%',
        legId: 'wooden-cone-715',
      }
    ]
  },
  {
    image: '',//bigImage04,
    name: 'Spacious luxury',
    description: 'This configuration is for those who need that extra space, and want the feel of real wood under their fingers.',
    price: 1666.00,
    ctaTarget: '/configurator#W1tbeyJtb2R1bGVOYW1lIjoidGFibGV0LWRvY2stcm90YXJ5IiwibWF0ZXJpYWwiOiJIZXJpdGFnZSIsImNvbG9yIjoib2FrIiwib3JpZW50YXRpb24iOiJob3Jpem9udGFsIiwicm90YXRpb24iOjAsImxlZ1Bvc2l0aW9ucyI6eyJ0b3BMZWZ0Ijp0cnVlLCJ0b3BSaWdodCI6ZmFsc2UsImJvdHRvbVJpZ2h0IjpmYWxzZSwiYm90dG9tTGVmdCI6ZmFsc2UsIm1pZGRsZSI6ZmFsc2V9LCJsZWdzQ291bnQiOjF9LHsibW9kdWxlTmFtZSI6ImJhc2ljIiwibWF0ZXJpYWwiOiJIZXJpdGFnZSIsIm9yaWVudGF0aW9uIjoiaG9yaXpvbnRhbCIsImNvbG9yIjoib2FrIiwicm90YXRpb24iOjAsImxlZ1Bvc2l0aW9ucyI6eyJ0b3BMZWZ0IjpmYWxzZSwidG9wUmlnaHQiOmZhbHNlLCJib3R0b21SaWdodCI6ZmFsc2UsImJvdHRvbUxlZnQiOmZhbHNlLCJtaWRkbGUiOmZhbHNlfSwibGVnc0NvdW50IjowfSx7Im1vZHVsZU5hbWUiOiJiYXNpYyIsIm1hdGVyaWFsIjoiSGVyaXRhZ2UiLCJvcmllbnRhdGlvbiI6Imhvcml6b250YWwiLCJjb2xvciI6Im9hayIsInJvdGF0aW9uIjowLCJsZWdQb3NpdGlvbnMiOnsidG9wTGVmdCI6ZmFsc2UsInRvcFJpZ2h0IjpmYWxzZSwiYm90dG9tUmlnaHQiOmZhbHNlLCJib3R0b21MZWZ0IjpmYWxzZSwibWlkZGxlIjpmYWxzZX0sImxlZ3NDb3VudCI6MH0seyJtb2R1bGVOYW1lIjoiY2FibGluZy1ob2xlIiwibWF0ZXJpYWwiOiJIZXJpdGFnZSIsIm9yaWVudGF0aW9uIjoiaG9yaXpvbnRhbCIsImNvbG9yIjoib2FrIiwicm90YXRpb24iOjAsImxlZ1Bvc2l0aW9ucyI6eyJ0b3BMZWZ0IjpmYWxzZSwidG9wUmlnaHQiOmZhbHNlLCJib3R0b21SaWdodCI6ZmFsc2UsImJvdHRvbUxlZnQiOmZhbHNlLCJtaWRkbGUiOmZhbHNlfSwibGVnc0NvdW50IjowfSx7Im1vZHVsZU5hbWUiOiJ3aXJlbGVzcyIsIm1hdGVyaWFsIjoiSGVyaXRhZ2UiLCJvcmllbnRhdGlvbiI6Imhvcml6b250YWwiLCJjb2xvciI6Im9hayIsInJvdGF0aW9uIjowLCJsZWdQb3NpdGlvbnMiOnsidG9wTGVmdCI6ZmFsc2UsInRvcFJpZ2h0Ijp0cnVlLCJib3R0b21SaWdodCI6ZmFsc2UsImJvdHRvbUxlZnQiOmZhbHNlLCJtaWRkbGUiOmZhbHNlfSwibGVnc0NvdW50IjowfV0sW3sibW9kdWxlTmFtZSI6ImJhc2ljIiwibWF0ZXJpYWwiOiJIZXJpdGFnZSIsImNvbG9yIjoib2FrIiwib3JpZW50YXRpb24iOiJob3Jpem9udGFsIiwicm90YXRpb24iOjAsImxlZ1Bvc2l0aW9ucyI6eyJ0b3BMZWZ0IjpmYWxzZSwidG9wUmlnaHQiOmZhbHNlLCJib3R0b21SaWdodCI6ZmFsc2UsImJvdHRvbUxlZnQiOnRydWUsIm1pZGRsZSI6ZmFsc2V9LCJsZWdzQ291bnQiOjF9LHsibW9kdWxlTmFtZSI6ImJhc2ljIiwibWF0ZXJpYWwiOiJIZXJpdGFnZSIsIm9yaWVudGF0aW9uIjoiaG9yaXpvbnRhbCIsImNvbG9yIjoib2FrIiwicm90YXRpb24iOjAsImxlZ1Bvc2l0aW9ucyI6eyJ0b3BMZWZ0IjpmYWxzZSwidG9wUmlnaHQiOmZhbHNlLCJib3R0b21SaWdodCI6ZmFsc2UsImJvdHRvbUxlZnQiOmZhbHNlLCJtaWRkbGUiOmZhbHNlfSwibGVnc0NvdW50IjowfSx7Im1vZHVsZU5hbWUiOiJiYXNpYyIsIm1hdGVyaWFsIjoiSGVyaXRhZ2UiLCJvcmllbnRhdGlvbiI6Imhvcml6b250YWwiLCJjb2xvciI6Im9hayIsInJvdGF0aW9uIjowLCJsZWdQb3NpdGlvbnMiOnsidG9wTGVmdCI6ZmFsc2UsInRvcFJpZ2h0IjpmYWxzZSwiYm90dG9tUmlnaHQiOmZhbHNlLCJib3R0b21MZWZ0IjpmYWxzZSwibWlkZGxlIjpmYWxzZX0sImxlZ3NDb3VudCI6MH0seyJtb2R1bGVOYW1lIjoiYmFzaWMiLCJtYXRlcmlhbCI6Ikhlcml0YWdlIiwib3JpZW50YXRpb24iOiJob3Jpem9udGFsIiwiY29sb3IiOiJvYWsiLCJyb3RhdGlvbiI6MCwibGVnUG9zaXRpb25zIjp7InRvcExlZnQiOmZhbHNlLCJ0b3BSaWdodCI6ZmFsc2UsImJvdHRvbVJpZ2h0IjpmYWxzZSwiYm90dG9tTGVmdCI6ZmFsc2UsIm1pZGRsZSI6ZmFsc2V9LCJsZWdzQ291bnQiOjB9LHsibW9kdWxlTmFtZSI6ImJhc2ljIiwibWF0ZXJpYWwiOiJIZXJpdGFnZSIsImNvbG9yIjoib2FrIiwib3JpZW50YXRpb24iOiJob3Jpem9udGFsIiwicm90YXRpb24iOjAsImxlZ1Bvc2l0aW9ucyI6eyJ0b3BMZWZ0IjpmYWxzZSwidG9wUmlnaHQiOmZhbHNlLCJib3R0b21SaWdodCI6dHJ1ZSwiYm90dG9tTGVmdCI6ZmFsc2UsIm1pZGRsZSI6ZmFsc2V9LCJsZWdzQ291bnQiOjF9XV0sIm1ldGFsLXJvdW5kLTcxNSJd',
    pins: [
      {
        locationX: '11%',
        locationY: '32%',
        moduleId: 'tablet-dock-rotary',
        moduleMaterial: 'Heritage',
        moduleColor: 'oak',
        moduleOrientation: 'horizontal',
      },
      {
        locationX: '57%',
        locationY: '40%',
        moduleId: 'cabling-hole',
        moduleMaterial: 'Heritage',
        moduleColor: 'oak',
        moduleOrientation: 'horizontal',
      },
      {
        locationX: '70%',
        locationY: '40%',
        moduleId: 'wireless',
        moduleMaterial: 'Heritage',
        moduleColor: 'oak',
        moduleOrientation: 'horizontal',
      },
      {
        locationX: '13%',
        locationY: '74%',
        legId: 'metal-round-715',
      }
    ]
  }
]

class IndexImageConfiguration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSetup: 0,
    };

    this.previousConfiguration = this.previousConfiguration.bind(this);
    this.nextConfiguration = this.nextConfiguration.bind(this);
  }

  previousConfiguration = () => {
    this.setState({
      currentSetup: (this.state.currentSetup + setups.length - 1) % setups.length
    })
  }

  nextConfiguration = () => {
    this.setState({
      currentSetup: (this.state.currentSetup + setups.length + 1) % setups.length
    })
  }

  render() {
    const pinsRender = setups[this.state.currentSetup].pins.map((pin, index) => {
      return (
        <IndexImageConfigurationPin
          key={index}
          locationX={pin.locationX}
          locationY={pin.locationY}
          itemName={pin.itemName}
          itemDescription={pin.itemDescription}
          itemImage={pin.itemImage}
          itemPrice={pin.itemPrice}
          ctaLabel={pin.ctaLabel}
          ctaDestination={pin.ctaDestination}
          moduleId={pin.moduleId}
          moduleMaterial={pin.moduleMaterial}
          moduleColor={pin.moduleColor}
          moduleOrientation = {pin.moduleOrientation}
          legId={pin.legId}
        />
      )
    })

    return (
      <section className={cx({ 'container-wide': true, 'index-image-configuration': true})} style={{ backgroundImage: 'url(' + setups[this.state.currentSetup].image + ')', height: '580px', backgroundPosition: 'center' }}>
        {pinsRender}
        <div className={styles['configuration-info']}>
          <div className={styles['chevron-container']}>
            <button className={styles['chevron-button']} onClick={() => this.previousConfiguration()}><img src={chevronLeft} alt="Previous configuration" /></button>
          </div>
          <div className={styles['info-left']}>
            <h3>Example configuration:</h3>
            <h2>{setups[this.state.currentSetup].name}</h2>
            <p>{setups[this.state.currentSetup].description}</p>
            <span className={styles['price']}>${setups[this.state.currentSetup].price.toFixed(2)}</span>
          </div>
          <div className={styles['info-right']}>
            <DoubleCta
              primaryCtaText='Open in configurator'
              primaryCtaTarget={setups[this.state.currentSetup].ctaTarget}
            />
          </div>
          <div className={styles['chevron-container']}>
            <button className={styles['chevron-button']} onClick={() => this.nextConfiguration()}><img src={chevronRight} alt="Next configuration" /></button>
          </div>
        </div>
      </section>
    );
  }
}

IndexImageConfiguration.defaultProps = {
  isNegative: false,
  cartNumber: 3,
}

export default IndexImageConfiguration;



// WEBPACK FOOTER //
// ./src/components/index/IndexImageConfiguration.js
