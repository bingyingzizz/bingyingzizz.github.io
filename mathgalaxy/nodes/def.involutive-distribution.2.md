# 对合分布　`def.involutive-distribution`　·　续页（第 2 页）
[在星图里打开](../#n=def.involutive-distribution)　·　第 1 页 [nodes/def.involutive-distribution.md](./def.involutive-distribution.md)

## 陈述（续）
被拼成薄片」的全部障碍。
设 $\mathcal{D}$ 是 $M$ 上的光滑 $k$ 阶切分布（`def.tangent-distribution`）。称 $\mathcal{D}$ **对合**（involu
tive），如果对任意开集 $U \subseteq M$ 与任意 $X, Y \in \Gamma(\mathcal{D}|_{U})$（取值落在 $\mathcal{D}$ 里的光滑向量
场），都有
$$[X,Y] \in \Gamma(\mathcal{D}|_{U}),$$
其中 $[\cdot,\cdot]$ 是向量场的 Lie 括号（`def.lie-bracket`）。
**只需查生成元**：设 $\mathcal{D}$ 在 $U$ 上由 $X_{1},\ldots,X_{k}$ 生成，则 $\mathcal{D}$ 在 $U$ 上对合，当且仅当每个
括号都能写成生成元的 $C^{\infty}$-线性组合
$$[X_{i},X_{j}] = \sum_{l=1}^{k} a^{l}_{\ ij}\,X_{l},\qquad a^{l}_{\ ij} \in C^{\infty
}(U).$$
这一条判据是 Frobenius 定理证明里真正动手验的东西。

> 续见 [nodes/def.involutive-distribution.3.md](./def.involutive-distribution.3.md)
