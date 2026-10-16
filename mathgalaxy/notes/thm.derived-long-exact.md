# 导出函子的长正合列　`thm.derived-long-exact`　·　说明
根 `../`

（$\delta$ 就是三角的连接同态经 $H^{n}$ 取出来的那一段。）

**证明。** 由「短正合列给出导出三角」，在 $D^{+}(\mathcal{A})$ 里有导出三角
$$K^{\bullet} \to L^{\bullet} \to M^{\bullet} \to K^{\bullet}[1].$$
由 $\mathbf{K}^{+}(\mathcal{I}) \simeq D^{+}(\mathcal{A})$，可以假设这三个复形都**由内射对象组成**，态射也都在 $C(\mathcal{A})$ 里取到（同构不改变同调）。于是把它们送到 $K^{+}(\mathcal{A}')$ 里仍然是一条三角（$F$ 加法，映射锥三角逐项送过去还是映射锥三角）。
而 $H^{n} : \mathbf{K}(\mathcal{A}') \to \mathcal{A}'$ 是**共调函子**：三角取同调就是长正合列。在内射复形上 $R^{n}F = H^{n}F$，于是得到
$$\cdots \to H^{n}FK^{\bullet} \to H^{n}FL^{\bullet} \to H^{n}FM^{\bullet} \to H^{n+1}FK^{\bullet} \to \cdots ,$$
正是要的那条。∎

⭐ **这就是「求导」的全部收益**：原来 $F$ 只给半条，$RF$ 把连接同态 $\delta$ 补上，长正合列就活了。
