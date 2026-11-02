# 全纯 + 围道积分 $\implies$ 三角形上的积分为零
`imp.goursat-triangle-proof` · 推出 · strong 边 · 根 `../`

`def.holomorphic` 全纯函数 + `def.contour-integral` 复围道积分 → `lem.goursat-triangle` Goursat 三角形引理

设 $T$ 是 $\Omega$ 内的闭三角形，$\eta=\oint_{\partial T} f\,\mathrm{d}z$。把 $T$ 的四条边中点连起来，分成四个全等的小三角形 $T_1,\ldots,T_4$；沿内部边界的积分两两抵消，故

$$\eta=\sum_{j=1}^{4}\eta_j,\qquad \eta_j=\oint_{\partial T_j}f\,\mathrm{d}z.$$

于是有某个 $j$ 使 $|\eta_j|\ge|\eta|/4$。取 $T^{(1)}=T_j$，重复这一分法，得到嵌套的闭三角形 $T\supset T^{(1)}\supset T^{(2)}\supset\cdots$，满足

$$|\eta|\le 4^{n}\,|\eta_n|,\qquad \eta_n=\oint_{\partial T^{(n)}}f\,\mathrm{d}z.$$

它们的直径按 $2^{-n}$ 收缩，故交集是唯一一点 $z_0\in T$。$f$ 在 $z_0$ 复可微：对任意 $\varepsilon>0$，当 $|z-z_0|$ 足够小时

> 续见 proofs/imp.goursat-triangle-proof.2.md
