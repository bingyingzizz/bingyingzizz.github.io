# 谱序列　`def.spectral-sequence`　·　说明
根 `../`

从哪来：给复形 $K$ 一个过滤 $F^{p}K$，同调上的过滤由



$$F^{p}H^{n} := \operatorname{im}\bigl(H^{n}(F^{p}K) \to H^{n}(K)\bigr)$$



继承。于是每根 $H^{n}$ 上都有一串 $H^{n} \supseteq \cdots \supseteq F^{p}H^{n} \supseteq F^{p+1}H^{n} \supseteq \cdots \supseteq 0$。

谱序列说的就是：**对充分大的 $r$，$E_{r}$ 页稳定下来，恰好等于这个过滤的关联分次**。所以它是「从过滤的复形一层层逼近同调」的工具 —— 直接算 $H^{n}$ 太难时，就把 $H^{n}$ 拆成容易算的那些碎片。
