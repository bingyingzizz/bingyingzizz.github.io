# 谱半径　`def.spectral-radius`　·　续页（第 3 页）
[在星图里打开](../#n=def.spectral-radius)　·　第 1 页 [nodes/def.spectral-radius.md](./def.spectral-radius.md)　·　上一页 [nodes/def.spectral-radius.2.md](./def.spectral-radius.2.md)

## 陈述（续）
$ 的变体）不一定成立。
- (2) 相似不变：**只用「相似保持特征多项式」**（`def.char-poly`），不需要任何范数。
- (3) $\rho(A) = \lim_{k}\lVert A^{k}\rVert^{1/k}$：**这是全组唯一有真内容的**。$(\le)$ 用 (1) 与谱半径的幂性质；$(\ge)$ 要用 **Jordan 标准形**（`thm.jordan-canonical-form`）+ 一个 $\varepsilon
$ 技巧（把 $\rho + \varepsilon$ 当成“放大后的谱半径”，证明 $\lVert(A/(\rho+\varepsilon))^{k}\rVert$ 有界）。**必须有限维**：无穷维时这条公式一般**不**成立（要看算子谱的边界与范数之间的关系）。
- (4) $\rho(A) < 1 \iff A^{k} \to 0$：**只依赖 (3) 或 Jordan 形**。($\Longleftarrow$) 若 $\rho \ge 1$，取

> 续见 [nodes/def.spectral-radius.4.md](./def.spectral-radius.4.md)
