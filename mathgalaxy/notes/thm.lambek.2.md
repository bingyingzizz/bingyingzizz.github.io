# 只需有限生成理想　`thm.lambek`　·　说明
根 `../`

把两个列各自张量后比较：$K \otimes M \to R^{n} \otimes M \to M_{1} \otimes M \to 0$ 正合，故「$K \otimes M \to R^{n} \otimes M$ 单」等价于「$R^{n} \otimes M \to M_{1} \otimes M$ 单」（蛇引理）。

于是只需证：对每个**有限生成**子模 $K \subseteq R^{n}$，$K \otimes M \to R^{n} \otimes M$ 单。

**第三步（对 $n$ 归纳）**：$n = 1$ 时 $K$ 就是有限生成右理想，正是假设。$n > 1$ 时写 $R^{n} = R^{n-1} \oplus R$，令 $K_{1} := K \cap R^{n-1}$、$K_{2}$ 为 $K$ 在第二个分量上的投影（$R$ 的有限生成**右**理想 —— 与判据里的右理想同侧；$K \subseteq R^{n}$ 按右子模记账）。由**Noether 性**，$K_{1}$ 作为 $R^{n-1}$ 的子模**有限生成**，归纳假设可以直接用上（非 Noether 情形要另作滤过余极限论证，本节点不展开）。于是有短正合列

$$0 \to K_{1} \to K \to K_{2} \to 0, \qquad 0 \to R^{n-1} \to R^{n} \to R \to 0 .$$

> 续见 notes/thm.lambek.3.md
