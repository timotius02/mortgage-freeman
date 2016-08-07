import numpy
import pandas
import quandl
quandl.ApiConfig.api_key = 'ZZpkwKXpFsejDeve5_xA'
print(quandl.get("FMAC/5US", authtoken="ZZpkwKXpFsejDeve5_xA"))
data = quandl.get("FMAC/5US", returns="pandas", authtoken='ZZpkwKXpFsejDeve5_xA')
print(data.values)
