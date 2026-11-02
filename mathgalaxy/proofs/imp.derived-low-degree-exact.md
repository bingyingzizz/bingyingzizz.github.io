# 长正合列的头几项就是低次正合列
`imp.derived-low-degree-exact` · 推出 · strong 边 · 根 `../`

`thm.long-exact` 长正合列 → `prop.low-degree-exact` 低次正合列

**先认出两端。** 对 $G$-模 $M$，标准上链复形的低次项给出 $H^{0}(G,M) = M^{G}$、$H^{1}(G,M) = Z^{1}(G,M)/B^{1}(G,M)$，其中 $B^{1} = \operatorname{im}\delta^{0}$、$Z^{1} = \ker\delta^{1}$。把

$$0 \to \ker\delta^{0} \to C^{0}(G,M) \xrightarrow{\ \delta^{0}\ } \ker\delta^{1} \to \ker\delta^{1}/\operatorname{im}\delta^{0} \to 0$$

写出来，就得到第一条正合列 $0 \to M^{G} \to M \to Z^{1}(G,M) \to H^{1}(G,M) \to 0$。这一段只用到定义。

**再用长正合列。** 设 $0 \to A \to B \to C \to 0$ 是 $G$-模的短正合列。$C^{n}(G,-) = \operatorname{Map}(G^{n},-)$ 逐项正合，所以

$$0 \to C^{\bullet}(G,A) \to C^{\bullet}(G,B) \to C^{\bullet}(G,C) \to 0$$

> 续见 proofs/imp.derived-low-degree-exact.2.md
