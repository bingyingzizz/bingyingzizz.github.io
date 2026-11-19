# imp.tietze-banach
`imp.tietze-banach` · 推出 · strong 边 · 根 `../`

`def.paracompact` 仿紧空间 + `def.banach-space` Banach 空间 + `def.chaus` 紧 Hausdorff 空间范畴 + `def.continuous` 连续（ε-δ 判据） → `thm.tietze-banach` Tietze 延拓（Banach 值）

偏差项住在一个函数空间 $C(K, V)$ 里，而**要把它压掉就得靠延拓**，即这条 Tietze。

⚠️ **这条一般拓扑里也有实值版本**（Tietze 延拓定理）；这里的增量是：**取值可以让是任意实 Banach 空间**。

**证明（Dugundji 延拓定理）。** 取值在拓扑向量空间里的 Tietze 是 Dugundji 的定理：设 $X$ **仿紧**（度量空间即可）、$A \subseteq X$ **闭**、$V$ 是**局部凸**拓扑向量空间，则存在**线性**延拓算子 $C(A, V) \to C(X, V)$，特别地限制映射满。
- **构造**：仿紧性给出 $A$ 的一个开邻域系 $\{U_{i}\}$ 的局部有限细化与配套的**单位分解** $\{\varphi_{i}\}$（$\sum \varphi_{i} = 1$，$\varphi_{i} \ge 0$，支集在 $U_{i}$ 里）。

> 续见 proofs/imp.tietze-banach.3.md
