# 范数诱导的距离　`prop.norm-induces-metric`
范数诱导的距离：平移不变 + 齐次
layer 17 · 命题 · 赋范空间与有界算子 · 泛函分析
[在星图里打开](../#n=prop.norm-induces-metric)　·　[节点索引](../index.md)

令 $d(x, y) := \|x - y\|$。则 $d$ 是 $E$ 上的距离，并且

- **平移不变**：$d(x + z,\ y + z) = d(x, y)$；
- **齐次**：$d(\lambda x,\ \lambda y) = |\lambda|\,d(x, y)$；
- 每个球 $B(x, r)$ 都是**凸**的。

反过来，若距离满足平移不变与齐次，则 $\|x\| := d(x, 0)$ 是范数，且它诱导回这个距离。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/prop.norm-induces-metric.2.md](./prop.norm-induces-metric.2.md)

refs: Rudin, Functional Analysis · 赋范空间与有限维

> 说明见 `notes/prop.norm-induces-metric.md`

引用：`prop.norm-induces-metric`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
