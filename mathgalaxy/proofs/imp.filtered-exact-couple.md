# 长正合列打包成正合偶 $\implies$ 与直接构造同一个谱序列
`imp.filtered-exact-couple` · 推出 · strong 边 · 根 `../`

`def.exact-couple` 正合偶 + `thm.exact-couple-spectral` 正合偶给出谱序列 → `prop.filtered-complex-exact-couple` 过滤复形给出正合偶

**第一步：构造偶。** 对每个 $p$ 有复形的短正合列 $0 \to F^{p+1}K \to F^{p}K \to \operatorname{Gr}^{p}K \to 0$。取长正合列

$$\cdots \to H^{n}(F^{p+1}K) \xrightarrow{\ i\ } H^{n}(F^{p}K) \xrightarrow{\ j\ } H^{n}(\operatorname{Gr}^{p}K) \xrightarrow{\ k\ } H^{n+1}(F^{p+1}K) \to \cdots$$

并把 $H^{p+q}$ 认成双次数 $(p,q)$ 的分量：$D_{1}^{p,q} := H^{p+q}(F^{p}K)$、$E_{1}^{p,q} := H^{p+q}(\operatorname{Gr}^{p}K)$。于是

> 续见 proofs/imp.filtered-exact-couple.2.md
