# 投射维数　`def.projective-dimension`　·　说明
根 `../`

**读法**：维数说的不是「消解有多长」，而是「**能压到多短**」。任意 $R$-模都有任意长的投射消解，有趣的是它能不能被截断到某一步。

**两个端点**：$\operatorname{pd}_{R} M = 0 \iff M$ 投射（消解 $0 \to M \xrightarrow{\ 1\ } M \to 0$ 就够，长度为 $0$）；$\operatorname{pd}_{R} M \le 1$ 说的是「存在投射预覆盖 $P_{0} \twoheadrightarrow M$ 且它的核投射」。

**无穷维确实会发生**：取 $R = k[x,y]/(xy)$ 在极大理想 $(x,y)$ 处的局部化，则剩余域 $k = R/(x,y)$ 的投射维数是 $\infty$。理由是一般的：诺特局部环上 $\operatorname{gl.dim} R < \infty$ 恰好等价于 $R$ 正则，而 $k[x,y]/(xy)$ 局部化后在 $(x,y)$ 处不是正则环（维数 $1$、嵌入维数 $2$）✓。

⭐ **等价刻画**（见「投射维数与扩展群的消失刻画」）：$\operatorname{pd}_{R} M \le n$ 当且仅当 $\operatorname{Ext}^{k}_{R}(M, -) = 0$ 对一切 $k > n$ 成立。于是维数就是「第一个不再消失的次数」减一。

> 续见 notes/def.projective-dimension.2.md
