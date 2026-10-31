# Lie 导数　`def.lie-derivative`　·　续页（第 2 页）
[在星图里打开](../#n=def.lie-derivative)　·　第 1 页 [nodes/def.lie-derivative.md](./def.lie-derivative.md)

## 陈述（续）
设 $X \in \mathfrak{X}(M)$，$\varphi_{t}$ 是它的（局部）流（`def.flow`）。对张量场 $T$（`def.tensor-field`）定义 **Lie 导数**
$$(\mathcal{L}_{X}T)_{p} := \left.\frac{\mathrm{d}}{\mathrm{d}t}\right|_{t=0}\bigl(\varphi_{t}^{\ast}T\bigr)_{p},$$
其中 $\varphi_{t}^{\ast}$ 是「沿微分同胚的拉回」：函数与形式用拉回，向量场则用 $\mathrm{d}\varphi_{-t}$ 推过去（向量场没有拉回，只有推前）。逐类写出：
- **函数**：$\mathcal{L}_{X}f = Xf$；
- **向量场**：$\mathcal{L}_{X}Y = [X,Y]$（`def.lie-bracket`）；
- **$1$-形式**：$(\mathcal{L}_{X}\omega)(Y) = X
\bigl(\omega(Y)\bigr) - \omega\bigl([X,Y]\bigr)$；
- **张量积**：$\mathcal{L}_{X}(T\otimes S) = (\mathcal{L}_{X}T)\otimes S + T\otimes(\mathcal{
L}_{X}S)$，且 $\mathcal{L}_{X}$ 与缩并交换。

> 续见 [nodes/def.lie-derivative.3.md](./def.lie-derivative.3.md)
