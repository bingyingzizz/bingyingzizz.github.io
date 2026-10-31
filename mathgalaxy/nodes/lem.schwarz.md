# Schwarz 引理　`lem.schwarz`
引理：Schwarz 引理
layer 22 · 引理 · 共形映射与正规族 · 复变函数
[在星图里打开](../#n=lem.schwarz)　·　[节点索引](../index.md)

**白话**：把单位圆盘映到自身、并且固定原点的全纯映射，一定被 $z \mapsto z$ 压住：像点比原像更靠近圆心。

设 $\mathbb{D} = \{\, z : |z| < 1 \,\}$，$f: \mathbb{D} \to \mathbb{D}$ 全纯且 $f(0) = 0$。则

(1) $|f(z)| \le |z|$ 对一切 $z \in \mathbb{D}$ 成立；

(2) $|f'(0)| \le 1$；

(3) 若存在 $z_0 \ne 0$ 使 $|f(z_0)| = |z_0|$，或者 $|f'(0)| = 1$，则 $f$ 是旋转 $f(z) = e^{i\theta} z$。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.schwarz-pick`](../nodes/thm.schwarz-pick.md) Schwarz–Pick 定理

- …另有出边，续页见 [nodes/lem.schwarz.3.md](./lem.schwarz.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/lem.schwarz.2.md](./lem.schwarz.2.md)

refs: 王晓光《复变函数》· Schwarz 引理；Ahlfors, Complex Analysis, Ch. 6 · Conformal Mapping

> 说明见 `notes/lem.schwarz.md`

引用：`lem.schwarz`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
