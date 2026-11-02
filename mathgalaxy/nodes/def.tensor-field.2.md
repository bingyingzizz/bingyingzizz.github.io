# 张量场　`def.tensor-field`　·　续页（第 2 页）
[在星图里打开](../#n=def.tensor-field)　·　第 1 页 [nodes/def.tensor-field.md](./def.tensor-field.md)

## 陈述（续）
成光滑对象 —— 张量场就是能按矩阵方式逐点记账
的那类量；度量、曲率、微分形式全是它的样子。
设 $M$ 是 $n$ 维光滑流形，$p \in 
M$。**$(r,s)$ 型张量**是多重线
性映射
$$T : \underbrace{T_{p}^
{\ast}M \times \cdots 
\times T_{p}^{\ast}M}_
{r} \times \underbrace{T
_{p}M \times \cdots \t
imes T_{p}M}_{s} \longr
ightarrow \mathbb{R},$$
即吃了 $r$ 个余向量与 $s$ 个向量吐一个数。
全体记 $T^{(r,s)}_{p}M$，维数 $
n^{r+s}$。**张量丛**是
$$T^{(r,s)}M := \bigsqcup
_{p \in M} T^{(r,s)}_{p
}M ,$$
它是 $n + n^{r+s}$ 维光滑流形，造法与
切丛相同：转移映射是 Jacobi 矩阵的 $s$ 
次直积与它的逆的 $r$ 次直积（`def.tan
gent-bundle`）。
$T^{(r,s)}M$ 的光滑截面叫 **$(
r,s)$ 型张量场**。在卡里展开
$$T = \sum T^{i_{1}\cdo
ts i_{r}}_{\ \ j_{1}
\cdots j_{s}}\ \partia
l_{i_{1}} \otimes \cdo
ts \otimes \partial_{i

> 续见 [nodes/def.tensor-field.3.md](./def.tensor-field.3.md)
