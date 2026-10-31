# 弧长　`def.arc-length`　·　续页（第 2 页）
[在星图里打开](../#n=def.arc-length)　·　第 1 页 [nodes/def.arc-length.md](./def.arc-length.md)

## 陈述（续）
$$L(\gamma) := \int_{a}^{b}\lVert\gamma'(t)\rVert\,\mathrm{d}t ,\qquad \lVert\gamma'(t)\rVert = \sqrt{x'(t)^{2}+y'(t)^{2}+z'(t)^{2}} .$$

从 $t_{0}\in[a,b]$ 量起的**弧长函数**是
$$s(t) := \int_{t_{0}}^{t}\lVert\gamma'(u)\rVert\,\mathrm{d}u ,\qquad s'(t) = \lVert\gamma'(t)\rVert .$$
若 $\lVert\gamma'(t)\rVert\equiv 1$，称 $\gamma$ 是**弧长参数化**（单位速参数化），此时弧长就是参数之差。正则曲线总能重参数化成弧长参数（边上给构造），此后一律用 $s$ 记参数、$T := \gamma'(s)$ 记单位切向量。

> 续见 [nodes/def.arc-length.3.md](./def.arc-length.3.md)
