# 平坦坐标 $\implies$ 积分流形 $\implies$ 对合，且叶片粘成叶状结构
`imp.mf2-frobenius-integral` · 推出 · strong 边 · 根 `../`

`def.integral-manifold` 积分流形 + `def.lie-bracket` Lie 括号 + `def.manifold-chart` 图卡 → `thm.frobenius` Frobenius 定理

对 $p\in M$，取过 $p$ 的平坦坐标卡 $(U,\varphi)$ 与切片 $S=\{x^{k+1}=\cdots=x^{n}=0\}$：$S$ 上每点都可由 $p$ 出发的 $\mathcal{D}$-曲线到达，故 $S$ 含于 $p$ 的等价类 $L$。所有这样的切片给出 $L$ 的一个图册（转移映射是平坦坐标之间光滑映射的限制），于是 $L$ 是连通浸入子流形、$TL=\mathcal{D}|_{L}$。由定义 $L$ 极大：任何含 $p$ 的积分流形 $N$ 中的曲线都是 $\mathcal{D}$-曲线，故 $N\subset L$。这些 $L$ 互不相交、覆盖 $M$，即得叶状结构。（$M$ 第二可数，故每个 $L$ 的图册可取可数子族，$L$ 是第二可数流形；它是 $M$ 的浸入子流形。）

> 续见 proofs/imp.mf2-frobenius-integral.5.md
