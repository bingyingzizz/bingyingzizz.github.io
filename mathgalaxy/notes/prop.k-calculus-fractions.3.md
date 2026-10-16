# K(A) 允许分式演算　`prop.k-calculus-fractions`　·　说明
根 `../`

**消去条件。** 设 $f \circ s \simeq g \circ s$（$s$ 是拟同构），记 $h := f - g$。则 $h s \simeq 0$；由映射锥的泛性质，$h$ 分解成 $L^{\bullet} \xrightarrow{\;i\;} M(s)^{\bullet} \xrightarrow{\;h'\;} M^{\bullet}$。取 $t : M^{\bullet} \to M(h')^{\bullet}$ 为映射锥的包含，则 $t h \simeq 0$；而三角 $M(s) \xrightarrow{h'} M^{\bullet} \xrightarrow{t} M(h') \to M(s)[1]$ 的长正合列配上「$M(s)$ 零调」给出 $H^{n}(M^{\bullet}) \cong H^{n}(M(h')^{\bullet})$ —— 所以 **$t$ 是拟同构**，于是 $t f \simeq t g$。

恒等是拟同构、拟同构对复合封闭 —— 这两条平凡（$H^{n}$ 是函子）。**左**分式演算把同一套构造放到 $\mathcal{A}^{\mathrm{op}}$ 里做（等价地：让 $\theta$ 的拟同构分量换到第一边）即得。∎

⭐ **意义**：有了它，$D(\mathcal{A})$ 的态射就能老老实实写成**屋顶** $K^{\bullet} \xleftarrow{\;\sim\;} K'^{\bullet} \longrightarrow L^{\bullet}$，不必去处理任意长的分式链。
