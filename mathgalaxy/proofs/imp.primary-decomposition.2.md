# 唯一分解 + 极小多项式 $\implies$ 根子空间分解
`imp.primary-decomposition` · 推出 · strong 边 · 根 `../`

`thm.poly-ufd` K[x] 是唯一分解整环 + `def.minimal-poly` 极小多项式 + `prop.root-bound` 根的个数不超过次数 → `thm.primary-decomposition` 根子空间分解

$$K[x]/(\chi_T) \;\cong\; \prod_i K[x]/((x - \lambda_i)^{m_i})$$
3. **翻译回 $V$**：对每个 $i$ 令 $V_i := \ker (T - \lambda_i I)^{m_i}$。由互素性可取多项式 $u_i$ 使 $\sum_i u_i \cdot \frac{\chi_T}{(x-\lambda_i)^{m_i}} = 1$（Bézout），作用到 $v \in V$ 上给出分解 $v = \sum_i v_i$，$v_i \in V_i$。直和性由「不同因子的核之交为零」得到。
4. **维数**：$V_i$ 是 $T$-不变的，且 $T|_{V_i}$ 只有一个特征值 $\lambda_i$，故 $\chi_{T|_{V_i}} = (x - \lambda_i)^{\dim V_i}$；两边取乘积并与 $\chi_T$ 比较，得 $\di

> 续见 proofs/imp.primary-decomposition.3.md
