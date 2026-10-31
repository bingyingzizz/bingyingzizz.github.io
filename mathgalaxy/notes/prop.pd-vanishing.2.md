# 投射维数与消失　`prop.pd-vanishing`　·　说明
根 `../`

⭐ **实用形式**：验维数时通常只算**一个**群 —— $\operatorname{Ext}^{n+1}_{R}(M, N)$ 对一切 $N$ 为零即可，不必逐层算。反过来，想知道 $\operatorname{pd}$ 到底多大，就找出一个使 $\operatorname{Ext}^{n}$ 非零的 $N$。

⚠️ **两个方向别记反**：$\operatorname{pd}_{R} M$ 管的是 $\operatorname{Ext}(M, -)$（**第一个**变量），$\operatorname{id}_{R} N$ 管的是 $\operatorname{Ext}(-, N)$（**第二个**变量）。

📌 一个立刻的推论：$R$ 是半单环 $\iff$ 每个模都投射 $\iff \operatorname{gl.dim} R = 0$。
