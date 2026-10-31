# 导出偶的递推 $\implies$ 谱序列及其微分规律
`imp.exact-couple-spectral` · 推出 · strong 边 · 根 `../`

`def.exact-couple` 正合偶 → `thm.exact-couple-spectral` 正合偶给出谱序列

**第三步：$j_{r}$ 每步多一个 $(1,-1)$。** 归纳：设 $j_{r}$ 的双次数是 $(a_{r}, b_{r})$。导出时 $j_{r+1}(i_{r}(x)) = [j_{r}(x)]$ —— 输入是 $i_{r}(x)$（比 $x$ 多一个 $(-1,1)$），输出却是 $j_{r}(x)$（没有那一步），所以 $j_{r+1}$ 的双次数是 $j_{r}$ 的加上 $(1,-1)$。由 $j_{1} = j$ 的双次数 $(0,0)$ 起算，得 $j_{r}$ 的双次数是 $(r-1,\ 1-r)$。

**第四步：乘出 $d_{r}$。** $d_{r} = j_{r}k_{r}$ 的双次数是 $(r-1, 1-r) + (1, 0) = (r,\ 1-r)$，逐分量写出就是

$$d_{r} : E_{r}^{p,q} \longrightarrow E_{r}^{p+r,\ q-(r-1)} .$$

> 续见 proofs/imp.exact-couple-spectral.3.md
