# 长正合列的头几项就是低次正合列
`imp.derived-low-degree-exact` · 推出 · strong 边 · 根 `../`

`thm.long-exact` 长正合列 → `prop.low-degree-exact` 低次正合列

是**复形**的短正合列。把长正合列定理用在它上面，注意 $R^{0}(-) = (-)^{G}$、$R^{1} = H^{1}$，并取第 $0$、$1$ 项，得

$$0 \to A^{G} \to B^{G} \to C^{G} \xrightarrow{\ \partial\ } H^{1}(G,A) \to H^{1}(G,B) \to H^{1}(G,C),$$

其中连接同态 $\partial$ 就是长正合列里那个 $\delta$ 在 $(0,1)$ 处的样子：它把「$C$ 的不动点」送到「$A$ 的一维上同调」。两段合起来正是低次正合列。$\blacksquare$

> 所以「低次正合列」不必单独证：第二行是长正合列的头几项，第一行是 $H^{0}$、$H^{1}$ 定义的直接读法。
