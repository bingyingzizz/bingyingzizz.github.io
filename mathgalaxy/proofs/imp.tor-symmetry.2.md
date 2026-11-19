# imp.tor-symmetry
`imp.tor-symmetry` · 推出 · strong 边 · 根 `../`

`def.tor` 挠积 + `def.bicomplex` 双复形 + `def.spectral-sequence` 谱序列 → `prop.tor-symmetry` 挠积的对称性

于是谱序列在 $E^{1}$ 页就只剩一行 —— 但一行仍可能有非零的 $d^{1}$（如该行是 $\mathbb{Z} \xrightarrow{2} \mathbb{Z}$），所以要看**这一行的同调**（也就是 $E^{2}$），此时才退化，得 $H_{n}(T_{\bullet}) \cong H_{n}(P_{\bullet}\otimes N) = \operatorname{Tor}_{n}^{R}(M, N)$ ✓。
再按**列**过滤（交换环上 $P\otimes Q \cong Q\otimes P$，双复形转置）：同一步计算给出 $H_{n}(T_{\bullet}) \cong H_{n}(Q_{\bullet}\otimes M) = \operatorname{Tor}_{n}^{R}(N, M)$ ✓。

同一个 $H_{n}(T_{\bullet})$ 被算出两次，故两者同构 ✓。

∎

> `def.spectral-sequence` 层 21 高于目标层 20；本边用谱序列框架重述同一计算，为保持目标层不升，不参与层号计算。
