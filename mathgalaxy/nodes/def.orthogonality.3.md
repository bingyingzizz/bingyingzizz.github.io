# 正交　`def.orthogonality`　·　续页（第 3 页）
[在星图里打开](../#n=def.orthogonality)　·　第 1 页 [nodes/def.orthogonality.md](./def.orthogonality.md)　·　上一页 [nodes/def.orthogonality.2.md](./def.orthogonality.2.md)

## 陈述（续）
**勾股定理的假设**：$u \perp v$ 就够了（不需要有限维、不需要完备）：$\lVert u+v\rVert^{2} = \lVert u\rVert^{2} + 2\operatorname{Re}\langle u,v\rangle + \lVert v\rVert^{2}$，实情形 $\langle u,v\rangle = 0$ 直接消去；**复内积情形要用 $\operatorname{Re}\langle u,v\rangle = 0$**（一般 $\langle u,v\rangle$ 是复数，只正交意味着它的实部为零 —— 正交本身定义为 $\langle u,v\rangle = 0$，所以没问题，但写证明时不能只扔掉一项就完事）。
⚠️ **容易混的两组词**：**正交组**（两两正交，长度任意）vs **标准正交组**（再加单位长）；**正交补** $S^{\perp}$ 是「与 $S$ 全部正交的向量」，它是**子空间**且 $S \cap S^{\perp} = \{0\}$（内积正定时），但在一般双线性型里这条会失效（`def.isotropic-subspace`）。

> 续见 [nodes/def.orthogonality.4.md](./def.orthogonality.4.md)
