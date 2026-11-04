# 无环性的四条等价说法　`prop.acyclic-equivalent-conditions`　·　说明
根 `../`

- (1) $\iff$ (2)：**同义反复**。层的上同调就是逐点取值的上同调；$H^{n}(\mathcal{C}, M)$ 按定义等于 $H^{n}(X \mapsto\Gamma(X,M))$ 的导出。
- (2) $\iff$ (4)：**这一步是 Čech 与导出函子的比较**：对**任意** $X$ 与**任意**覆盖，Čech 上同调与层上同调通过一个谱序列相连；无环时谱序列退化，两者一致。⚠️ 一般情形下**不**一致（要 $\mathcal{C}$ 是仿紧/开覆盖足够好，见 `thm.paracompact-cech-equals-sheaf`）。
- (2) $\iff$ (3)：**要用「覆盖族的余极限」**：$H^{n}(X, M) = \varinjlim_{\mathfrak{X}} \check{H}^{n}(\mathfrak{X}, M)$（沿覆盖加细取极限）。既然每个 Čech 群为零，极限为零；反向由「每个覆盖都可细到单点覆盖」得。⚠️ 这一步要求该余极限**确实**是层上同调（即上述比较成立）。

> 续见 notes/prop.acyclic-equivalent-conditions.3.md
