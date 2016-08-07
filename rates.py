from collections import namedtuple
fixedplans = namedtuple("fixedplans", "discrate irate period")


listofinterestrates = [0.0275, 0.03375, 0.02875, 0.03, 0.03875, 0.04, 0.04125, 0.0425, 0.04375, 0.045, 0.04625, 0.0475,
                       0.04875, 0.05]
listofperiods = [5, 10, 15, 20, 25, 30]
fiveyradjrate40k = 0.03456
sevenyradjrate40k = 0.03412
fiveyradjrate60k = 0.03474
sevenyradjrate60k = 0.03443
fiveyrfedsmedian = 0.0371
fiveyrfedsmode = 0.0296
fiveyradjrate40k *= fiveyrfedsmode/fiveyrfedsmedian
fiveyradjrate60k += fiveyrfedsmode/fiveyrfedsmedian
#amtborrowed = 450000  # specified by user input
#upperlimit = 2500  # results from client data

# v is a dictionary of discount rates with
#    the keys being the rates and values being
#    listof(iRate, nPeriod) pairs
v = []

for i in listofinterestrates:
    for n in listofperiods:
        m = fixedplans(discrate=1/(1+i) ** n, irate=i, period=n)
        v.append(m)
#print(discountrates)

def fixrate(amtborrowed):
    fixedpayments = []
    for i in v:
        fixedpayments.append([(amtborrowed * i[1]/(1-i[0]**i[2]))/12, [i[1], i[2]]])
    return fixedpayments

#fixedpayments.sort()

#fixedfinalretval = list(filter(lambda x: x[0] <= upperlimit, list(fixedpayments)))[-3:]
#print(fixedfinalretval)

def adjrate(amtborrowed):
    adjpayments = []
    adjpayments.append([(amtborrowed * fiveyradjrate40k / (1 - 1 / (1 + fiveyradjrate40k) ** 30))/12, "with a 5-year Adjustable plan starting at 2.75%"])
    adjpayments.append([(amtborrowed * sevenyradjrate40k / (1 - 1 / (1 + sevenyradjrate40k) ** 30))/12, "with a 7-year Adjustable plan starting at 2.88%"])
    adjpayments.append([(amtborrowed * fiveyradjrate60k / (1 - 1 / (1 + fiveyradjrate60k) ** 30))/12, "with a 5-year Adjustable plan starting at 2.88%"])
    adjpayments.append([(amtborrowed * sevenyradjrate60k / (1 - 1 / (1 + sevenyradjrate60k) ** 30))/12, "with a 7-year Adjustable plan starting at 3.00%"])
    return adjpayments

def insurancetype(purchase, amtborrowed, upperlimit):
    fp = fixrate(amtborrowed)
    ap = adjrate(amtborrowed)
    # retval = 0
    if purchase == "house":
        # monthly payment + monthly property tax + monthly insurance
        map(lambda x: x[0] + float(2127 / 12) + float(952 / 12), fp)
        map(lambda x: x[0] + float(2127 / 12) + float(952 / 12), ap)
        # retval = financingplansfixed(amt)[0] + float(2127/12) + float(952/12)
    elif purchase == "car":
        # monthly payment + monthly insurance
        map(lambda x: x[0] + float(412 / 12) + float(2374 / 12), fp)
        map(lambda x: x[0] + float(412 / 12) + float(2374 / 12), ap)
        # retval = financingplansfixed(amt)[0] + float(412/12) + float(2374/12)
    fp.sort()
    ap.sort()
    final = fp + ap
    final.sort()
    listfinal = list(filter(lambda x: x[0] <= upperlimit, list(final)))[-3:]
    listfinal.reverse()
    retval = []
    for i in listfinal:
        if isinstance(i[1], str):
            retval.append([round(i[0], 2),  int(i[1][7]), "adjustable", float(i[1][-5:-1])])
            #print("Your monthly payment would be %.2f, %s" % (round(i[0], 2), i[1]))
        else:
            retval.append([round(i[0], 2), i[1][1] , "fixed",  round(i[1][0]*100, 2)])
            #print("Your monthly payment would be %.2f, with a %d-year Fixed Rate of %.3f%%" % (round(i[0], 2), i[1][1], 100 * i[1][0]))
    return retval
#insurancetype("house")

#fixedpayments.sort()
#adjpayments.sort()

#fixedfinalretval = list(filter(lambda x: x[0] <= upperlimit, list(fixedpayments)))[-3:]
#for i in fixedfinalretval:
#    print("Your monthly payment would be %.2f, with a %d-year Fixed Rate of %.3f%%" % (round(i[0], 2), i[1][1], 100 * i[1][0]))


#print(fixedfinalretval)
#adjpaymentsfinal = list(filter(lambda x: x[0] <= upperlimit, list(adjpayments)))
#print(adjpayments)
#final = fixedfinalretval + adjpayments
#final.sort()
#listfinal = list(filter(lambda x: x[0] <= upperlimit, list(final)))[-3:]

#for i in listfinal:
#    if isinstance(i[1], str):
#        print("Your monthly payment would be %.2f, %s" % (round(i[0], 2), i[1]))
#    else:
#        print("Your monthly payment would be %.2f, with a %d-year Fixed Rate of %.3f%%" % (round(i[0], 2), i[1][1], 100 * i[1][0]))
