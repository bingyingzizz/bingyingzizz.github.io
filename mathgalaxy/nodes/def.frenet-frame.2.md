# 曲率与挠率　`def.frenet-frame`　·　续页（第 2 页）
[在星图里打开](../#n=def.frenet-frame)　·　第 1 页 [nodes/def.frenet-frame.md](./def.frenet-frame.md)

## 陈述（续）
$$\kappa(s) := \lVert T'(s)\rVert \ge 0 .$$

在 $\kappa(s)>0$ 处定义**主法向**与**副法向**

$$N := \frac{T'}{\kappa},\qquad B := T\times N ,$$
三者两两正交且都是单位向量，$(T,N,B)$ 叫 **Frenet 标架**（曲线的活动标架）。**挠率**定义为

$$\tau(s) := -\langle B'(s),N(s)\rangle .$$
$(T,N)$ 张成的平面叫**密切平面**（$B$ 是它的法向）：$\kappa$ 量「切线转得多快」，$\tau$ 量「曲线离开密切平面多快」。

> 续见 [nodes/def.frenet-frame.3.md](./def.frenet-frame.3.md)
