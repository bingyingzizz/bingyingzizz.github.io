# 满足关系　`def.satisfaction`　·　续页（第 2 页）
根 `../`　·　第 1 页 `nodes/def.satisfaction.md`

## 陈述（续）
**满足关系** $\mathfrak{A} \models \varphi [s]$（「$\varphi$ 在 $\mathfrak{A}$ 中关于赋值 $s$ 成立」）按公式的复杂度**递归定义**：
- **原子公式**：按符号的解释直接算，例如 $\mathfrak{A} \models R(t_{1}, \ldots, t_{n})[s]$ 当且仅当 $(t_{1}^{\mathfrak{A}}[s], \ldots, t_{n}^{\mathfrak{A}}[s]) \in R^{\mathfrak{A}}$；
- $\mathfrak{A}
 \models \neg \varphi [s]$，当且仅当 $\mathfrak{A} \models \varphi [s]$ **不**成立；
- $\mathfrak{A} \models (\varphi \wedge \psi)[s]$，当且仅当两者都成立；
- $\mathfrak{A} \models \forall v_{i} 
\varphi [s]$，当且仅当对**每个** $a \in A$ 都有 $\mathfrak{A} \models \varphi [s(v_{i} \mapsto a)]$。
当 $\varphi$ 是**语句**（无自由变元）时，$\mathfrak{A} \models \varphi$ 与赋值 $s$ 无关，直接说 $\varphi$ 在 $\mathfrak{A}$ 中**成立**，记 $\mathfrak{A} \models \varphi$。
