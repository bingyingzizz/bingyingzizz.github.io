# 短正合列 $\implies$ 长正合列
`imp.long-exact` · 推出 · strong 边 · 根 `../`

`def.distinguished-triangle` 导出三角 + `def.cohomology` 同调 + `prop.triangle-rotation` 三角的旋转与延拓 → `thm.long-exact` 长正合列

**第二步：旋转并取同调。** 把上一步的三角反复旋转，得到一族导出三角

$$K[n] \to L[n] \to M[n] \to K[n+1], \qquad (n \in \mathbb{Z})$$

对每个这样的三角作用同调函子 $H^{0}$：因为 $H^{0}$ 是上同调函子，序列

$$H^{0}(K[n]) \to H^{0}(L[n]) \to H^{0}(M[n])$$

正合，而 $H^{0}(K[n]) = H^{n}(K)$（位移的性质）。把这些正合的三项片段在连接同态 $\delta$ 处首尾相接，就得到长正合列

$$\cdots \to H^{n}(K) \to H^{n}(L) \to H^{n}(M) \xrightarrow{\ \delta\ } H^{n+1}(K) \to \cdots$$

∎

> 续见 proofs/imp.long-exact.3.md
