# 集合上的积分　`def.integral-over-set`
$\int_E f\,d\mu$：可测集上的 Lebesgue 积分
layer 19 · 定义 · 积分 · 实变函数+数学分析
[在星图里打开](../#n=def.integral-over-set)　·　[节点索引](../index.md)

设 $(X, \mathcal{A}, \mu)$ 是测度空间，$E \in \mathcal{A}$，$f$ 可测。若 $f \ge 0$，定义

$\int_E f\,d\mu := \int f\,\mathbf{1}_E\,d\mu \in [0, \infty].$

若 $f$ 可积（$\int |f| < \infty$），同样定义 $\int_E f := \int f\mathbf{1}_E$，复值函数拆实部虚部。$E = X$ 时回到全空间积分；$\mu(E) = 0$ 时 $\int_E f = 0$。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.integral-over-set.2.md](./def.integral-over-set.2.md)

refs: Folland, Real Analysis, §2.3

## 说明
⚠ $E$ 必须可测，否则指示函数 $\mathbf{1}_E$ 不可测。⭐ 这个记号与「$f$ 乘以指示函数再积分」完全同义；先有非负/复值积分，再限制到可测集。

引用：`def.integral-over-set`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
