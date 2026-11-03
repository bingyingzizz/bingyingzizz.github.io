# Lagrange 子流形　`def.lagrangian-submanifold`　·　说明
根 `../`

**两条定义条件里「$\dim = n$」不能由「迷向」推出**（这是最常被省掉的一步）：

- $\omega|_{L} \equiv 0$：**只给迷向**。迷向子流形的维数可以**远小于** $n$（一条辛直线就迷向），所以单靠它得不到“极大”。
- $\dim L = n$（**必须额外要求**）：等价地要求 $T_{p}L = (T_{p}L)^{\perp}$（逐点极大）。在非退化型下 $\dim W + \dim W^{\perp} = \dim V$，于是「$W = W^{\perp}$」把维数**逼成**一半 —— 这才是 Lagrange 的真正含义。
- **等价说法的方向**：逐点看 $T_{p}L$ 是 Lagrange 子空间 $\iff$ $L$ 是 Lagrange 子流形（$L$ 浸入、且 $\omega|_L = 0$、$\dim = n$）。$(\Leftarrow)$ 逐点显然；$(\implies)$ 要「$L$ 的维数是常数」，这一点由浸入保证。

> 续见 notes/def.lagrangian-submanifold.3.md
