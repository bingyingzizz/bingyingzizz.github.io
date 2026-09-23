# 公式　`def.formula`　·　续页（第 2 页）
根 `../`　·　第 1 页 `nodes/def.formula.md`

## 陈述（续）
$$\varphi ::= R(t_{1}, \ldots, t_{n}) \;\mid\; \neg \varphi \;\mid\; (\varphi \wedge \psi) \;\mid\; (\varphi \vee \psi) \;\mid\; (\varphi \to \psi) \;\mid\; \forall v_{i} \varphi \;\mid\; \exists v_{i} \varphi$$
其中 $R$ 遍历 $\mathcal{L}$ 的关系符号，$t_{j}$ 遍历项（严格说这是一条**归纳定义**：公式全体是「含全部原子公式、并对上述运算封闭」的**最小**集合）。

变元在 $\forall v_{i}$、$\exists v_{i}$ 的辖域内出现叫**约束出现**，否则叫**自由出现**；没有自由变元的公式叫**语句**（闭公式）。
公式的**复杂度**（连接词与量词的个数）可以做归纳 —— 这是「对公式作归纳」的依据。
