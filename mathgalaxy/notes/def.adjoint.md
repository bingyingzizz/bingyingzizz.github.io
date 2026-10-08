# 伴随函子　`def.adjoint`　·　说明
根 `../`

一句话：**两个方向之间的翻译互为最佳**。从左边绕（先 $F$ 再射出去）与从右边绕（先射出去再 $G$）得到的东西一样多 —— 而且是**自然**一样多。

例：

- 遗忘函子 $\mathbf{Top} \to \mathbf{Set}$ 有左右**两个**伴随：左伴随是**离散拓扑**（$\operatorname{Hom}_{\mathbf{Top}}(S_{d}, X) \cong \operatorname{Hom}_{\mathbf{Set}}(S, F(X))$），右伴随是**平凡拓扑**（$\operatorname{Hom}_{\mathbf{Top}}(X, S_{t}) \cong \operatorname{Hom}_{\mathbf{Set}}(F(X), S)$）。
- 遗忘函子 $\mathbf{Ab} \to \mathbf{Set}$ 的左伴随是**自由阿贝尔群**：$\operatorname{Hom}_{\mathbf{Ab}}(\mathbb{Z}^{(X)}, M) \cong \operatorname{Hom}_{\mathbf{Set}}(X, \operatorname{forget} M)$。**自由是遗忘的左伴随**。

两条运算规则：

- **对偶**：$F \dashv G$ $\iff$ $G^{\mathrm{op}} \dashv F^{\mathrm{op}}$（在 $\mathcal{C}^{\mathrm{op}} \to \mathcal{D}^{\mathrm{op}}$ 上）。
- **复合**：$F \dashv G$ 且 $F' \dashv G'$ $\implies$ $F' \circ F \dashv G \circ G'$，因为

> 续见 notes/def.adjoint.2.md
