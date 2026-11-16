# 类方程 + 让 Sylow 子群作用 $\implies$ Sylow 三条
`imp.sylow` · 推出 · strong 边 · 根 `../`

`thm.class-equation` 类方程 + `def.group-action` 群作用 + `thm.orbit-stabilizer` 轨道–稳定子定理 + `lem.p-group-subgroups` p-群的真子群严格小于其正规化子 → `thm.sylow` Sylow 定理

- **情形 A：$p \mid |Z(G)|$。** 取 $z \in Z(G)$，$\operatorname{ord}(z) = p$（这一步要交代清楚，不能白拿。由类方程 $|G| = |Z(G)| + \sum_i [G:C_G(x_i)]$，右端非中心共轭类的长度都是 $p$ 的正幂、故全被 $p$ 整除，而 $p \mid |G|$，所以 $p \mid |Z(G)|$。$Z(G)$ 是阿贝尔群，对它的阶归纳即可取出 $p$ 阶元：取 $x \ne e$，若 $p \mid \operatorname{ord}(x)$ 则 $x^{\operatorname{ord}(x)/p}$ 的

> 续见 proofs/imp.sylow.3.md
