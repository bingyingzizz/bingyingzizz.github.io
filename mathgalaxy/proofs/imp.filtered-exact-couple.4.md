# 长正合列打包成正合偶 $\implies$ 与直接构造同一个谱序列
`imp.filtered-exact-couple` · 推出 · strong 边 · 根 `../`

`def.exact-couple` 正合偶 + `thm.exact-couple-spectral` 正合偶给出谱序列 → `prop.filtered-complex-exact-couple` 过滤复形给出正合偶

- $r = 1$：$Z_{1} = F^{p}K \cap d^{-1}(F^{p+1}K)$、$B_{1} = F^{p}K \cap d(F^{p}K)$，商就是 $H^{p+q}(\operatorname{Gr}^{p}K)$ —— 与第一步的 $E_{1}$ 相同。✓
- $r = 2$：$d_{1} = jk$ 就是「连接同态 + 落到 $\operatorname{Gr}^{p+1}$」，其核商掉 $d_{1}$ 的像正好把 $Z_{1}$ 放宽到 $d^{-1}(F^{p+2}K)$ —— 即 $Z_{2}/B_{2}$。✓
- 归纳步：$Z_{r+1}$ 比 $Z_{r}$ 放宽一层（$d$ 允许再跳一格）、$B_{r+1}$ 比 $B_{r}$ 放宽一层（前一步允许再远一格），而导出偶的三条公式代入后给出**逐字相同**的两个递推。这一步

> 续见 proofs/imp.filtered-exact-couple.5.md
