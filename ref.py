import numpy as np
import scipy as sc
from scipy import stats
import matplotlib.pyplot as plt
import pandas as pd
from pandas import DataFrame, Series
db = pd.read_csv("/users/rosiezou/Desktop/mortgage-stanley/FMAC-5US.csv")
table = DataFrame(db, columns = ['Date', 'Value'])
plt.plot(db['Date'], db['Value'], 'bo')
regressionline = sc.stats.linregress(db['Date'], db['Value'])
m = regressionline[0]
b = regressionline[1]
x = np.linspace(0, 18, 100)
plt.plot(x, m*x + b)
plt.show()
print(table.median(0))
print(table.mode(0))
