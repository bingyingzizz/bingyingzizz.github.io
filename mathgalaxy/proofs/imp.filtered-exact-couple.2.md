# 长正合列打包成正合偶 $\implies$ 与直接构造同一个谱序列
`imp.filtered-exact-couple` · 推出 · strong 边 · 根 `../`

`def.exact-couple` 正合偶 + `thm.exact-couple-spectral` 正合偶给出谱序列 → `prop.filtered-complex-exact-couple` 过滤复形给出正合偶

$$i : D_{1}^{p,q} \to D_{1}^{p-1,q+1} \ (\text{等价地 } D_{1}^{p+1,q-1} \to D_{1}^{p,q}), \qquad j : D_{1}^{p,q} \to E_{1}^{p,q}, \qquad k : E_{1}^{p,q} \to D_{1}^{p+1,q} .$$

**正合性**：三角形的三处正合恰好就是长正合列中相邻三项的正合性（$\operatorname{im} i = \ker j$ 是「$F^{p+1} \to F^{p} \to \operatorname{Gr}^{p}$ 处正合」，$\operatorname{im} j = \ker k$、$\operatorname{im} k = \ker i$ 同理）。故这是一个正合偶。∎

> 续见 proofs/imp.filtered-exact-couple.3.md
