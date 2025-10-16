import { DefaultTheme } from "styled-components";
import { colors } from "./tokens";

export const lightTheme: DefaultTheme = {
colors: {
    bg: {
        disabled: colors.neutral[300],
        global: colors.white,
        marine: {
            calm: {
                enabled: colors.marine[50],
                hover: colors.marine[100],
                active: colors.marine[200],
            },
            loud: {
                enabled: colors.marine[500],
                hover: colors.marine[600],
                active: colors.marine[700],
            },
            loudStatic: {
                enabled: colors.marine[500],
                hover: colors.marine[600],
                active: colors.marine[700],
            }
        },
        red: {
            calm: {
                enabled: colors.red[50],
                hover: colors.red[100],
                active: colors.red[200],
            },
            loud: {
                enabled: colors.red[500],
                hover: colors.red[600],
                active: colors.red[700],
            },
            loudStatic: {
                enabled: colors.red[500],
                hover: colors.red[600],
                active: colors.red[700],
            }
        },
        blue: {
            calm: {
                enabled: colors.blue[50],
                hover: colors.blue[100],
                active: colors.blue[200],
            },
            loud: {
                enabled: colors.blue[500],
                hover: colors.blue[600],
                active: colors.blue[700],
            },
            loudStatic: {
                enabled: colors.blue[500],
                hover: colors.blue[600],
                active: colors.blue[700],
            }
        },
        lead: {
            calm: {
                enabled: colors.marine[50],
                hover: colors.marine[100],
                active: colors.marine[200],
            },
            loud: {
                enabled: colors.marine[500],
                hover: colors.marine[600],
                active: colors.marine[700],
            },
            loudStatic: {
                enabled: colors.marine[500],
                hover: colors.marine[600],
                active: colors.marine[700],
            },
        },
        neutral: {
            section: {
                calm: colors.white,
                calmInverted: colors.neutral[900],
                bold: colors.neutral[900],
                lightStatic: colors.white,
                darkStatic: colors.neutral[900],
            },
             global: {
                color: colors.neutral[100],
        
            }
        }
        
    },
    text: {
        blue: {
            calm: {
                enabled: colors.blue[50],
            },
            loud: {
                enabled: colors.blue[500],
            }
        },
        marine: {
            calm: {
                enabled: colors.marine[50],
            },
            loud: {
                enabled: colors.marine[500],
            }
        },
         red: {
            calm: {
                enabled: colors.red[50],
            },
            loud: {
                enabled: colors.red[500],
            }
        },
         neutral: {
            global: {
                base: colors.black,
                enabled: colors.neutral[600],
                disabled: colors.white,
            },
            calm: {
                enabled: colors.neutral[200],
            },
            loud: {
                enabled: colors.neutral[600],
            },
            inverted: {
                enabled: colors.neutral[900],
            }
        },
    },
    border: {
        lead: {
            calm: {
                enabled: colors.marine[200],
                hover: colors.marine[100],
                active: colors.marine[50],
            },
            loud: {
                enabled: colors.marine[500],
                hover: colors.marine[600],
                active: colors.marine[700],
            },
            onLight: {
                enabled: colors.marine[500],
                hover: colors.marine[600],
                active: colors.marine[700],
            },
            onDark: {
                enabled: colors.marine[200],
                hover: colors.marine[100],
                active: colors.marine[50],
            },
            inverted: {
                enabled: colors.marine[200],
                hover: colors.marine[100],
                active: colors.marine[50],
            },
        },
        blue: {
            calm: { 
                enabled: colors.blue[200],
            },
            loud: { 
                enabled: colors.blue[600],
            },
        },
        red: {
            calm: { 
                enabled: colors.red[200],
            },
            loud: { 
                enabled: colors.red[600],
            },
        },
        marine: {
            calm: { 
                enabled: colors.marine[200],
            },
            loud: { 
                enabled: colors.marine[600],
            },
        },
        neutral: {
            calm: { 
                disabled: colors.neutral[300],
                enabled: colors.neutral[400],
            },
            loud: { 
                disabled: colors.neutral[700],
            },
        },
    },
},
}
export const darkTheme: DefaultTheme = {
colors: {
    bg: {
        disabled: colors.neutral[300],
        global: colors.white,
        marine: {
            calm: {
                enabled: colors.marine[50],
                hover: colors.marine[100],
                active: colors.marine[200],
            },
            loud: {
                enabled: colors.marine[500],
                hover: colors.marine[600],
                active: colors.marine[700],
            },
            loudStatic: {
                enabled: colors.marine[500],
                hover: colors.marine[600],
                active: colors.marine[700],
            }
        },
        red: {
            calm: {
                enabled: colors.red[50],
                hover: colors.red[100],
                active: colors.red[200],
            },
            loud: {
                enabled: colors.red[500],
                hover: colors.red[600],
                active: colors.red[700],
            },
            loudStatic: {
                enabled: colors.red[500],
                hover: colors.red[600],
                active: colors.red[700],
            }
        },
        blue: {
            calm: {
                enabled: colors.blue[50],
                hover: colors.blue[100],
                active: colors.blue[200],
            },
            loud: {
                enabled: colors.blue[500],
                hover: colors.blue[600],
                active: colors.blue[700],
            },
            loudStatic: {
                enabled: colors.blue[500],
                hover: colors.blue[600],
                active: colors.blue[700],
            }
        },
        lead: {
            calm: {
                enabled: colors.marine[50],
                hover: colors.marine[100],
                active: colors.marine[200],
            },
            loud: {
                enabled: colors.marine[500],
                hover: colors.marine[600],
                active: colors.marine[700],
            },
            loudStatic: {
                enabled: colors.marine[500],
                hover: colors.marine[600],
                active: colors.marine[700],
            },
        },
        neutral: {
            section: {
                calm: colors.white,
                calmInverted: colors.neutral[900],
                bold: colors.neutral[900],
                lightStatic: colors.white,
                darkStatic: colors.neutral[900],
            },
             global: {
                color: colors.neutral[100],
        
            }
        }
        
    },
    text: {
        blue: {
            calm: {
                enabled: colors.blue[50],
            },
            loud: {
                enabled: colors.blue[500],
            }
        },
        marine: {
            calm: {
                enabled: colors.marine[50],
            },
            loud: {
                enabled: colors.marine[500],
            }
        },
         red: {
            calm: {
                enabled: colors.red[50],
            },
            loud: {
                enabled: colors.red[500],
            }
        },
         neutral: {
            global: {
                base: colors.black,
                enabled: colors.neutral[600],
                disabled: colors.white,
            },
            calm: {
                enabled: colors.neutral[200],
            },
            loud: {
                enabled: colors.neutral[600],
            },
            inverted: {
                enabled: colors.neutral[900],
            }
        },
    },
    border: {
        lead: {
            calm: {
                enabled: colors.marine[200],
                hover: colors.marine[100],
                active: colors.marine[50],
            },
            loud: {
                enabled: colors.marine[500],
                hover: colors.marine[600],
                active: colors.marine[700],
            },
            onLight: {
                enabled: colors.marine[500],
                hover: colors.marine[600],
                active: colors.marine[700],
            },
            onDark: {
                enabled: colors.marine[200],
                hover: colors.marine[100],
                active: colors.marine[50],
            },
            inverted: {
                enabled: colors.marine[200],
                hover: colors.marine[100],
                active: colors.marine[50],
            },
        },
        blue: {
            calm: { 
                enabled: colors.blue[200],
            },
            loud: { 
                enabled: colors.blue[600],
            },
        },
        red: {
            calm: { 
                enabled: colors.red[200],
            },
            loud: { 
                enabled: colors.red[600],
            },
        },
        marine: {
            calm: { 
                enabled: colors.marine[200],
            },
            loud: { 
                enabled: colors.marine[600],
            },
        },
        neutral: {
            calm: { 
                disabled: colors.neutral[300],
                enabled: colors.neutral[400],
            },
            loud: { 
                disabled: colors.neutral[700],
            },
        },
    },
},
}