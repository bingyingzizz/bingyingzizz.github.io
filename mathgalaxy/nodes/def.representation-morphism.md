# 表示同态　`def.representation-morphism`
表示同态
layer 17 · 定义 · 群与代数表示 · 抽象代数
[在星图里打开](../#n=def.representation-morphism)　·　[节点索引](../index.md)

设 $(V,\theta)$、$(W,\varphi)$ 是 $A$ 的表示。$A$-线性映射（ intertwiner）是 $F$-线性映射 $h:V\to W$，满足对所有 $a\in A$、$v\in V$ 有 $h(\theta(a)v)=\varphi(a)h(v)$。以这些态射构成范畴 $\mathrm{Rep}_A$。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.representation-morphism.2.md](./def.representation-morphism.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.representation-morphism.3.md](./def.representation-morphism.3.md)

refs: Lang, Algebra (GTM 211)

## 说明
同构恰是双射 intertwiner，其逆仍 $A$-线性。
intertwiner 的核与像都是子表示。
$\operatorname{End}_A(V)=\operatorname{Hom}_A(V,V)$ 是 $F$-代数；Schur 引理将对不可约 $V$ 描述它。
对 $A=F[G]$，intertwiner 恰是 $G$-等变映射。

引用：`def.representation-morphism`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
