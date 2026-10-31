# 长正合列打包成正合偶 $\implies$ 与直接构造同一个谱序列
`imp.filtered-exact-couple` · 推出 · strong 边 · 根 `../`

`def.exact-couple` 正合偶 + `thm.exact-couple-spectral` 正合偶给出谱序列 → `prop.filtered-complex-exact-couple` 过滤复形给出正合偶

**第二步：由定理得谱序列。** 由 `thm.exact-couple-spectral`，它给出谱序列，微分 $d_{r} : E_{r}^{p,q} \to E_{r}^{p+r,q-r+1}$。∎

**第三步：与直接构造逐页一致。** 对 $r$ 归纳证明

$$E_{r}^{p,q} = Z_{r}^{p,q}\big/ B_{r}^{p,q}, \qquad Z_{r}^{p,q} = F^{p}K^{p+q} \cap d^{-1}(F^{p+r}K^{p+q+1}), \qquad B_{r}^{p,q} = F^{p}K^{p+q} \cap d(F^{p-r+1}K^{p+q-1}) .$$

> 续见 proofs/imp.filtered-exact-couple.4.md
