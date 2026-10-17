# 沿线段的中值定理迭代 $\implies$ 多元 Taylor 公式
`imp.taylor-multi` · 推出 · strong 边 · 根 `../`

`thm.mean-value-multi` 多元中值定理 → `thm.taylor-multi` 多元 Taylor 公式

$$\varphi(1) = \sum_{j=0}^{k} \frac{\varphi^{(j)}(0)}{j!} + \frac{\varphi^{(k+1)}(\theta)}{(k+1)!}$$

**第三步：展开成多重指标。** 把 $D^{j}f(a)(h, \ldots, h)$ 按多重指标展开：$j$ 重线性型在 $(h, \ldots, h)$ 上的取值是

$$\sum_{|\alpha| = j} \binom{j}{\alpha} D^{\alpha} f(a)\, h^{\alpha} = j! \sum_{|\alpha| = j} \frac{D^{\alpha} f(a)}{\alpha!} h^{\alpha}$$

代入第二步即得节点里写的形式（余项同样按 $|\alpha| = k+1$ 展开）。

> 续见 proofs/imp.taylor-multi.3.md
