# 迷向子空间　`def.isotropic-subspace`　·　续页（第 2 页）
[在星图里打开](../#n=def.isotropic-subspace)　·　第 1 页 [nodes/def.isotropic-subspace.md](./def.isotropic-subspace.md)

## 陈述（续）
设 $\beta$ 是 $V$ 上的对称（或交错）双线性型，$W \subseteq V$ 是子空间。称 $W$ **迷向**（totally isotropic），若

$\beta(x, y) = 0$（对一切 $x, y \in W$）

等价说法：$W \subseteq W^{\perp}$（其中 $W^{\perp} = \{v : \beta(v, w) = 0\ \forall w \in W\}$ 是**正交补**）。
迷向子空间中**最大的那个维数**叫型的 **Witt 指标**（或迷向指标）。

**与内积空间的对照**：内积正定时 $W \cap W^{\perp} = 0$ 恒成立，所以没有非零迷向子空间；一般非退化型则可能有，且 $\dim W + \dim W^{\perp} = \dim V$ 仍成立，只是 $W$ 与 $W^{\perp}$ 会**相交**。

> 续见 [nodes/def.isotropic-subspace.3.md](./def.isotropic-subspace.3.md)
