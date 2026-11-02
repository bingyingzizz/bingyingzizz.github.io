# 导出偶的递推 $\implies$ 谱序列及其微分规律
`imp.exact-couple-spectral` · 推出 · strong 边 · 根 `../`

`def.exact-couple` 正合偶 → `thm.exact-couple-spectral` 正合偶给出谱序列

**第一步：递推有定义。** 由正合偶的定义那一条已验证：导出偶 $(D^{\prime}, E^{\prime}, i^{\prime}, j^{\prime}, k^{\prime})$ 又是正合偶。于是归纳地得到一列正合偶

$$(D_{r}, E_{r}, i_{r}, j_{r}, k_{r})_{r \ge 1}, \qquad E_{r+1} = H(E_{r}, d_{r}), \quad d_{r} = j_{r}k_{r} .$$

这就是谱序列定义里「每页是上一页的同调」那一条。

**第二步：$i_{r}$、$k_{r}$ 的双次数不随 $r$ 变。** 因为 $i^{\prime} = i|_{D^{\prime}}$ 与 $k^{\prime}([e]) = k(e)$ 都直接沿用原来的映射，双次数原样保留：$i_{r}$ 恒为 $(-1, 1)$、$k_{r}$ 恒为 $(1, 0)$。

> 续见 proofs/imp.exact-couple-spectral.2.md
