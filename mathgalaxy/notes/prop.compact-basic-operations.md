# 紧性的基本操作　`prop.compact-basic-operations`　·　说明
根 `../`

**证明。** (1) 给闭子集 $F \subseteq X$（$X$ 紧）与开覆盖，添上 $X \setminus F$ 得 $X$ 的开覆盖，取有限子覆盖再删掉那一项 ✓。(2) 给 $f : X \to Y$（$X$ 紧）与 $Y$ 中开覆盖，拉回得 $X$ 的开覆盖、取有限子覆盖再推回去 ✓。
(3) 给不交闭集 $A, B$：对每个 $a \in A$ 用 Hausdorff 性造 $a$ 的开邻域 $U_a$ 使 $\overline{U_a} \cap B = \emptyset$ ✓；$A$ 紧，取有限个覆盖 $A$，令 $U := \bigcup_{i} U_{a_i}$，则 $\overline{U} \cap B = \emptyset$ ✓；对 $B$ 做一次同样的操作，再把两次得到的开集调小一层，就得到分开 $A, B$ 的开集 ✓。∎
