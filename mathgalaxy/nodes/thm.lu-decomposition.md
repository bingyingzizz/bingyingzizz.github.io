# LU 分解　`thm.lu-decomposition`
LU 分解：把消元写成两个三角矩阵
layer 20 · 定理 · 矩阵分解与最小二乘 · 抽象代数
[在星图里打开](../#n=thm.lu-decomposition)　·　[节点索引](../index.md)

**在做什么**：高斯消元其实是在乘一串初等矩阵。把那些初等矩阵乘起来记成 $L$，消元的结果记成 $U$，就得到 $A = LU$。

设 $A \in M_{n}(K)$，且它的 $n$ 个**顺序主子式**全非零。则存在唯一的

$$A = LU ,$$
> 陈述续见 [nodes/thm.lu-decomposition.2.md](./thm.lu-decomposition.2.md)


## 它能推出什么 / 谁在用它
- ～弱边 [`thm.sylvester-criterion`](../nodes/thm.sylvester-criterion.md) Sylvester 判据

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.lu-decomposition.3.md](./thm.lu-decomposition.3.md)

refs: Hoffman–Kunze, Linear Algebra, 「Linear Transformations」· 三角化与消元；北大《高等代数》· 矩阵的三角分解

> 说明见 `notes/thm.lu-decomposition.md`

引用：`thm.lu-decomposition`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
