# 低次正合列　`prop.low-degree-exact`　·　说明
根 `../`

**第一行直接从复形读出来**：$H^{0} = \ker\delta^{0} = M^{G}$、$H^{1} = \ker\delta^{1}/\operatorname{im}\delta^{0} = Z^{1}/B^{1}$，而 $B^{1} = \operatorname{im}\delta^{0}$。把

$$0 \to \ker\delta^{0} \to M \to \ker\delta^{1} \to \ker\delta^{1}\big/\operatorname{im}\delta^{0} \to 0$$

写出来就是它 —— 三段正合各只用到定义。

**「作用平凡」那句**：$\delta^{0} m$ 是常函数 $g \mapsto g m - m$；作用平平时恒为 $0$，于是 $B^{1} = 0$、$Z^{1} = \operatorname{Hom}(G, M)$。

**第二行是长正合列的头几项**：$0 \to A \to B \to C \to 0$ 取右导出函子（$R^{0} = (-)^{G}$、$R^{1} = H^{1}$）得到的长正合列，按定义就是这一段；连接同态 $\partial$ 把「$C$ 的不动点」送到「$A$ 的一维上同调」。

⭐ **这两条是 $H^{1}$、$H^{2}$ 有具体含义的技术源头**：第一行说明 $H^{1}$ 是「截面 / 交叉同态」的空间，第二行说明短正合列的**断点**恰好落在 $H^{1}$ 上 —— 后面两条分类定理都是在给 $Z^{1}$、$Z^{2}$ 加语义。

> 续见 notes/prop.low-degree-exact.2.md
